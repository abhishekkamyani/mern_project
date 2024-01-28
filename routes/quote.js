const express = require("express");
const router = express.Router();
const quoteController = require("../controller/quote");

router
  .get("/", quoteController.getAll)
  .get("/:id", quoteController.get)
  .post("/", quoteController.create)
  .put("/:id", quoteController.replace)
  .patch("/:id", quoteController.update)
  .delete("/:id", quoteController.deleteIt);

exports.router = router;