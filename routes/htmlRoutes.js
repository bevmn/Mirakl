var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Loads gallery page
  app.get("/gallery", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/gallery.html"));
  });

  // Loads seller page
  app.get("/seller", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/seller.html"));
  });

  // Loads buyer page
  app.get("/gallery", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/buyer.html"));
  });

  // Loads cart page
  app.get("/gallery", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/cart.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

