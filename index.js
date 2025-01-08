const express = require("express");
const { resolve } = require("path");
const connectDatabase = require("./database.js");
const { updateMenuItem, deleteMenuItem } = require("./menu.controller.js");

const app = express();
const port = 3010;

app.use(express.static("static"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  connectDatabase();
  console.log(`Example app listening at http://localhost:${port}`);
});

app.put("/menu/:id", updateMenuItem);
app.delete("/menu/:id", deleteMenuItem);
