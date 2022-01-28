const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    email: {
      type: String,
      trim: true,
      required: "email is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    desc: {
      type: String,
      trim: true,
      required: "Content is required",
      minlength: [2, "Too short"],
      maxlength: [100, "Too long"],
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
