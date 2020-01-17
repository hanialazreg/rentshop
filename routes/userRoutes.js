const mongoose = require("mongoose");
const UserDB = require("../database/Users");
const bcrypt = require("bcryptjs");
const User = mongoose.model("user");
const secret = "mymymysecretsshhh";
const jwt = require("jsonwebtoken");

module.exports = app => {
  app.post("/api/signup", (req, res) => {
    User.findOne({ email: req.body.email }, (err, data) => {
      if (err) {
        return res.status(404).send(err);
      }
      if (data) {
        return res.status(404).json("email already exist");
      }
      var user = new User(req.body);

      user.save(err => {
        if (err) {
          return res.status(404).json(err);
        } else {
          res.status(200).send("register successfully");
        }
        //   res for took
      });
    });
  });

  // authentification
  app.post("/api/signin", function(req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: "Internal error please try again"
        });
      } else if (!user) {
        res.status(401).json({
          error: "Incorrect email or password"
        });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500).json({
              error: "Internal error please try again"
            });
          } else if (!same) {
            res.status(401).json({
              error: "Incorrect email or password"
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: "1h"
            });
            res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          }
        });
      }
    });
  });
};
