var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/gallery", function (req, res) {
    db.Art.findAll({}).then(function (dbArt) {
      res.json(dbArt);
    });
  });

  // Create a new example
  app.post("/api/gallery", function (req, res) {
    db.Art.create({
      item_name: req.body.item_name,
      image: req.body.image,
      category_: req.body.category_,
      artist_: req.body.artist_,
      price_: req.body.price_,
      stock_quantity_: req.body.stock_quantity_
    }).then(function (dbArt) {
      res.json(dbArt);
    });
  });


  // app.post("/api/gallery", function(req, res) {
  //   db.art.create(req.body).then(function(dbart) {
  //     res.json(dbart);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/gallery/:id", function (req, res) {
    db.Art.destroy({ where: { id: req.params.id } }).then(function (dbArt) {
      res.json(dbArt);
    });
  });
};



