const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const typeSchema = new Schema({
  type_name: { type: String, required: true },

  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

var Type = mongoose.model("Type", typeSchema);

var getAllType = function(callback) {
  Type.find((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

var createt = function(typeinfo, callback) {
  var type = new Type(typeinfo);
  console.log("hhhhhhh", typeinfo);
  type.save((err, data) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports.getAllType = getAllType;
module.exports.createt = createt;
