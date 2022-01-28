const express = require("express");
const router = express.Router();

// controller
const {
  create,
  list,
} = require("../controllers/quote");

// routes
router.post("/quote", create);
router.get("/quotes", list);

module.exports = router;
