const express = require("express");
const bodyParser = require("body-parser");
const gameApp = require(__dirname + "/game.js");
const path = require("path");
let ejs = require("ejs");
const app = express();
const logger = require("morgan");
const createError = require("http-errors");

//configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/game.html");
});

app.post("/", (req, res) => {
  const userInput = req.body.button;

  res.render("finished", { gameResult: gameApp.result(userInput) });
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
