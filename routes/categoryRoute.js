const mongoose = require("mongoose");
const Category = require("../database/Category");
module.exports = app => {
  app.post("/api/AddCategory", (req, res) => {
    Category.createCategory(req.body, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  //   app.delete("/api/deleteCategory", (req, res) => {
  //     Category.deleteCategory(req.body.name, (err, result) => {
  //       if (result) {
  //         res.status(200).send("true");
  //       } else {
  //         res.status(404).send("false");
  //       }
  //     });
  //   });

  app.get("/api/getProducts", (req, res) => {
    console.log(req.query.category);
    Category.getAllProductByCategory(req.query.category, (err, data) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  app.get("/api/categories", (req, res) => {
    Category.getAll((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
        res.end();
      }
    });
  });
};
