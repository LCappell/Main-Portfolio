const express = require("express");
const router = express.Router();
const data = require("./data/data.json");
const projects = data.Projects;

// Index route to render the home page

router.get("/", (req, res) => {
  res.render("index", { projects });
});

// About route to render the about page

router.get("/about", (req, res) => {
  res.render("about");
});

// Project route that renders a customized version of the project.pug template based on which ID was selected

router.get("/projects/:id", (req, res, next) => {
  const project = projects[req.params.id];
  if (project) {
    res.render("project", { project });
  } else {
    const err = new Error();
    err.status = 404;
    err.message = "Looks like the project you requested doesn't exist.";
    next(err);
  }
});

router.get("/error", (req, res, next) => {
  // Log out custom error handler indication
  console.log("custom error route called");

  const err = new Error();
  err.message = "Custom 500 error thrown";
  err.status = 404;
  throw err;
});

module.exports = router;
