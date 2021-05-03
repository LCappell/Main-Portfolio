const express = require("express");
const port = process.env.PORT || 3000;
// Call app on express
const app = express();
// Access static files
app.use(express.static("public"));
// Route to the routes folder
const routes = require("./routes");
app.use("/", routes);

//Call pug
app.set("view engine", "pug");

// ERROR HANDLER

app.use((req, res, next) => {
  const err = new Error();
  err.status = 404;
  next(err);
});

//error handler to catch global errors
app.use((err, req, res, next) => {
  res.locals.error = err;
  if (err.status === 404) {
    console.log("404 error handler called");
    err.message = `Oops! Looks like the project you're looking for doesn't exist 😥`;
    res.status(404).render("page-not-found", { err });
  } else {
    console.log("500 error handler called");
    err.message = `Oops! Looks like something went wrong with the server 😥`;
    res.status(err.status || 500).render("error", { err });
  }
});

/*GET generated error route - create and throw 500 server error **/
// Server Port
app.listen(port, () => console.log(`Server is running on port: ${port}`));
