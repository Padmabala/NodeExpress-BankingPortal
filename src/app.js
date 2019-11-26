const fs = require("fs");
const path = require("path");
const app = require("express");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.length("/", (req, res) => {
  res.render("index", { title: "Index" });
});
const server = app.listen(3000, () => {
  console.log("Project is running on port :", server.address.port);
});
