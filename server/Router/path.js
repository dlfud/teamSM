const express = require("express");
const db = require("../config/database.js");
const router = express.Router();

router.get("/api", (req, res) => {
 res.send({ test: "hi" });
});

router.get("/aaa", (req, res) => {
 db.query(`SELECT * FROM secretPost`, (err, rows) => {
  if (err) throw err;
  res.send(rows);
 });
});

module.exports = router;
