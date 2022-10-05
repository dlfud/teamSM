const express = require("express");
const router = express.Router();
const contrller = require("../Controller/controller.js");

router.get("/test", (req, res) => {
 res.send({ test: "hi" });
});

router.get("/read", contrller.findAll);

router.post("/create", contrller.create);

module.exports = router;
