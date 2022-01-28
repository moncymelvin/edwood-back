const Quote = require("../models/quote");

exports.create = async (req, res) => {
  try {
    const { name,email, desc } = req.body;
    // const category = await new Category({ name, slug: slugify(name) }).save();
    // res.json(category);
    res.json(await new Quote({ name, email,desc }).save());
  } catch (err) {
    res.status(400).send("Create Quote failed");
  }
};

exports.list = async (req, res) =>
  res.json(await Quote.find({}).sort({ createdAt: -1 }).exec());
