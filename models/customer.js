module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: { type: DataTypes.STRING },
        address_1: { type: DataTypes.STRING },
        address_2: { type: DataTypes.STRING },
        city_: { type: DataTypes.STRING },
        state_: { type: DataTypes.STRING },
        zip_: { type: DataTypes.STRING },
    });
    return Customer;
    };