const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

// Product schema

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: {
    type: String,
    required: true,
    validate: value => {
      if (!validator.isURL(value)) {
        throw new Error({ error: "Invalid URL address" });
      }
    }
  },
  price_rent: { type: Number },
  type_rent: { type: Schema.Types.ObjectId, ref: "Types" },
  availability: { type: Boolean },
  store: { type: Number },
  renters: [{ type: Schema.Types.ObjectId, ref: "Users" }]
});

var Product = mongoose.model("Product", productSchema);
// helper functions
/* all available products */

var getAllAvilable = function(callback) {
  Product.find({ availability: true }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

var getOneProduct = function(id, callback) {
  Product.findById(id).exec((err, product) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, product);
    }
  });
};
var createp = function(productinfo, callback) {
  var product = new Product({
    name: productinfo.name,
    description: productinfo.description,
    image: productinfo.image,
    price_rent: productinfo.price_rent,
    type_rent: productinfo.type_rent,
    store: productinfo.store
  });
  product.save(callback);
};

module.exports.getAllAvilable = getAllAvilable;
module.exports.getOneProduct = getOneProduct;
module.exports.createp = createp;
