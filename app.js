const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const path = require("path");
const port = process.env.PORT || 3000;
// Call app on express
const app = express();

const routes = require("./routes");
app.use("/", routes);
//Call pug
app.set("view engine", "pug");
//Create static file link
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookie());

// Server Port
app.listen(port, () => console.log(`Server is running on port: ${port}`));
