const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, unique: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Category = mongoose.model("Category", categorySchema);

var createCategory = function(categoryData, callback) {
  var category = new Category(categoryData);
  console.log(categoryData);
  category.save((err, data) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

var getAllProductByCategory = function(categoryName, callback) {
  Category.find({ name: categoryName })
    .populate({
      path: "products",
      match: {
        availability: true
      }
    })
    .exec((err, category) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, category);
      }
    });
};

var getAll = function(callback) {
  Category.find({}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};
// module.exports.updateProductCategory = updateProductCategory;
// module.exports.deleteCategory = deleteCategory;
module.exports.createCategory = createCategory;
module.exports.getAllProductByCategory = getAllProductByCategory;
module.exports.getAll = getAll;
