const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Type = require("../database/Type");

module.exports = app => {
  app.get("/api/types", (req, res) => {
    Type.getAllType((err, data) => {
      if (err) {
        res.status(400).send();
      } else {
        res.status(200).send(data);
        res.end();
      }
    });
  });

  app.post("/api/addType", (req, res) => {
    Type.createt(req.body, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
        res.end();
      }
    });
  });
};
