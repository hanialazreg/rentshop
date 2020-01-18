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
  app.post("/api/rent", (req, res) => {});

  app.get("/api/one", (req, res) => {
    // don't forguet to change body after complet test ooookkkkkk
    let id = req.body._id;
    console.log("hhhuuuhh", req.body._id);
    Products.getOneProduct(id, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
        res.end();
      }
    });
  });
};
