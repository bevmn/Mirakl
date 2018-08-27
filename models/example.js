module.exports = function (sequelize, DataTypes) {
  var Art = sequelize.define("Art", {
    item_name: { type: DataTypes.STRING },
    image: {type: DataTypes.STRING },
    category_: { type: DataTypes.STRING },
    artist_: { type: DataTypes.STRING },
    price_: { type: DataTypes.DECIMAL },
    stock_quantity_: { type: DataTypes.INTEGER },
  });
  return Art;
};


// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };
