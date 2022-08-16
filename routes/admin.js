const express = require("express");
const { loginAdmin } = require("../controllers/admin");
const isAuthAdmin = require("../middlewares/isAuthAdmin");

const router = express.Router();

router.post("/loginAdmin", loginAdmin);

router.get("/currentAdmin", isAuthAdmin, (req, res) => {
  res.send(req.admin);
});

module.exports = router;
