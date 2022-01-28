const mongoose = require("mongoose");

const advSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    images: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Adv", advSchema);
