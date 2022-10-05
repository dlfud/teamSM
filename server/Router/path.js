const express = require("express");
const router = express.Router();
const contrller = require("../Controller/controller.js");

router.get("/test", (req, res) => {
 res.send({ test: "hi" });
});

router.get("/read", contrller.findAll);

router.post("/create", contrller.create);

router.post("/update", contrller.update);

module.exports = router;
