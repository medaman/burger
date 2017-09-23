var express = require("express");
var burger = require(".././models/burger");

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "index.handlebars"));
});