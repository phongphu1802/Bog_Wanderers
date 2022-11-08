const express = require("express");
const router = express.Router();
const accountModel = require("../Model/AccountModel");

router.get("/", (req, res, next) => {
  accountModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).join("Loi server");
    });
});

module.exports = router;
