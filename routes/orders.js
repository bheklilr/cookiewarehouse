const router = require("express").Router();
const { CookieOrder } = require("../models");

router.get("/create", function(req, res) {
  console.log("Creating a new cookie");
  CookieOrder.create({ cookie: "Thin Mints", count: 5 });
  res.json({ cookie: "Thin Mints", count: 5 });
});

router.get("/", function(req, res) {
  console.log("before");
  CookieOrder.find({})
    .then(function(data) {
      console.log("found ", data);
      res.json(data);
    })
    .catch(err => {
      console.log("error");
      res.json({ err });
    });
});

module.exports = router;
