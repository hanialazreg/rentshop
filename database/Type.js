const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const typeSchema = new Schema({
  type_name: { type: String, required: true },
  name: { type: String, unique: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Type = mongoose.model("Type", categorySchema);
