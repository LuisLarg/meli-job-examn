const express = require("express"),
  path = require("path"),
  api = require("./api");

const app = express();

if (app.settings.env === "development") {
  app.use(require("morgan")("dev"));
}

app.use("/api/items", api);

app.listen(8080, () => console.log("Listening on 127.0.0.1:8080"));
