const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define(
  "Order",
  {
    order_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER, allowNull: false},
    currency_pair: {type: DataTypes.STRING, allowNull: false},
    order_type: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.DECIMAL, allowNull: false},
    amount: {type: DataTypes.DECIMAL, allowNull: false},
    status: {type: DataTypes.STRING, defaultValue: "open"},
  },
  {timestamps: true}
);

module.exports = Order;
