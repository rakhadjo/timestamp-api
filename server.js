// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

function is_utc(date_inp) {
  let utc_regex = /\d{4}-\d{2}-\d{2}/;
  return utc_regex.test(date_inp);
}

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
const { is_unix } = require("./functions");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// basic current datetime
app.get("/api", (req, res) => {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

app.get("/api/:date_str", (req, res) => {
  let inp = req.params.date_str;
  let x = new Date(inp);
  if (x.toString() === "Invalid Date") {
    res.json({
      error: x.toString(),
    });
  } else {
    res.json({
      unix: x.getTime(),
      utc: x.toUTCString(),
    });
  }
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
