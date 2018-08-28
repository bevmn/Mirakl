module.exports = function(sequelize, DataTypes) {
var art = sequelize.define("art", {
    image: { type: DataTypes.STRING },
    item_name: { type: DataTypes.STRING },
    category_: { type: DataTypes.STRING },
    artist_: { type: DataTypes.STRING },
    price_: { type: DataTypes.DECIMAL },
    stock_quantity_: { type: DataTypes.INTEGER },
});
return art;
};