const express = require("express");
const bodyParser = require("body-parser");
const gameApp = require(__dirname + "/game.js");
const path = require("path");
const ejs = require("ejs");
const app = express();
const logger = require("morgan");

//configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/game.html");
});

app.post("/", (req, res) => {
  const gameState = gameApp.result(req.body.button);

  res.render("finished", { gameResult: gameState });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started successfully!");
});
