const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hi");
  return res.json("hi");
});

app.listen(8000, () => {
  console.log("is it working??");
});
