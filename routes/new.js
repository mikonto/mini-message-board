var express = require("express");
var router = express.Router();
var { messages } = require("./index");

/* GET new message form page. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

/* POST new message. */
router.post("/", function (req, res, next) {
  const { name, message } = req.body;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
