const express = require("express");
const db = require("../config/database.js");
const router = express.Router();

router.get("/test", (req, res) => {
 res.send({ test: "hi" });
});

router.get("/read", (req, res) => {
 db.query(`SELECT * FROM secretPost`, (err, rows) => {
  if (err) throw err;
  res.send(rows);
 });
});

module.exports = router;
