const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  remove,
  list,
} = require("../controllers/adv");

// routes
router.post("/adv", authCheck, adminCheck, create);
router.get("/advs", list);
router.delete("/adv/:slug", authCheck, adminCheck, remove);

module.exports = router;
