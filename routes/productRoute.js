const mongoose = require("mongoose");

const Products = require("../database/Product");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

module.exports = app => {
  app.get("/api/products", (req, res) => {
    Products.getAllAvilable((err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
        res.end();
      }
    });
  });
  // don't forget to add product type okkkkkkkkkkkk?????
  app.post("/api/addproduct", (req, res) => {
    Products.createp(req.body, (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
        res.end();
      }
    });
  });
};
