var db = require("../models");

module.exports = function(app) {
  // Load index/home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load gallery page
  app.get("/gallery", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/gallery.html"));
  });

  // app.get("/gallery", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(results)
  // });
  
  // Load buyer page
  app.get("/buyer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/buyer.html"));
  });

  // app.get("/seller", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });



  // Load cart page
  app.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cart.html"));
  });

  // app.get("/buyer", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Load seller page
  app.get("/seller", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/seller.html"));
  });

  // app.get("/seller", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};