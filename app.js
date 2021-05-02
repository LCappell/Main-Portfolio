const express = require("express");
const port = process.env.PORT || 3000;
// Call app on express
const app = express();
// Access static files
app.use(express.static("public"));
// Route to the routes folder
const routes = require("./routes");
app.use("/", routes);
app.use("/project", routes);
//Call pug
app.set("view engine", "pug");

/*GET generated error route - create and throw 500 server error **/
// Server Port
app.listen(port, () => console.log(`Server is running on port: ${port}`));
