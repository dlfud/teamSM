const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send({ test: "hi" });
});

router.get("/aaa", (req, res) => {
  res.send({ test: "aaa" });
});

module.exports = router;
