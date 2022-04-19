const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const qaa = require("./config");

const app = express();
const db = mysql.createConnection(qaa);

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM test WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) return null;
      res.json(result);
    }
  );
});

app.listen(5000, () => {
  console.log("App Started");
});
