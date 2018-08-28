var db = require("../models");

module.exports = function (app) {
  // Get all Art
  app.get("/api/allGallery", function (req, res) {
    db.art.findAll({}).then(function (dbart) {
      res.json(dbart);
    });
  });

  // // Create a new example
  // app.post("/api/artsy_db", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Add a art piece
  app.post("/api/new", function (req, res) {
    db.art.create({
      image: req.body.image,
      item_name: req.body.item_name,
      category_: req.body.category_,
      artist_: req.body.artist_,
      price_: req.body.price_,
      stock_quantity_: req.body.stock_quantity_,
    });
  });

  // Delete an example by id
  app.delete("/api/delete", function (req, res) {
    db.art.destroy({ where: { id: req.params.id } }).then(function (dbart) {
      res.json(dbart);
    });
  });
};
