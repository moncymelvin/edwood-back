const adv = require("../models/adv");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    // const { name } = req.body;
    // const category = await new adv({ name, slug: slugify(name) }).save();
    // res.json(category);
    // res.json(await new adv({ name, slug: slugify(name) }).save());
    req.body.slug = slugify(req?.body?.title);
    console.log("req.body====",req.body)
    const newProduct = await new adv(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log("err=====",err);
    res.status(400).send("Create Adv failed");
  }
};

exports.list = async (req, res) =>
  res.json(await adv.find({}).sort({ createdAt: -1 }).exec());

exports.remove = async (req, res) => {
  try {
    const deleted = await adv.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("adv delete failed");
  }
};
