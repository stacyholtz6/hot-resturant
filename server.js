// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const tableData = [
//   {
//     name:
//   }
// ]

var tables = [];

var waiting = [];

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

app.get("/api/waiting", function (req, res) {
  return res.json(waiting);
});

app.post("/api/tables", function (req, res) {
    var newTable = req.body
    if (tables.length<5) {
      tables.push(newTable);
    }else {
      waiting.push(newTable);
    }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

