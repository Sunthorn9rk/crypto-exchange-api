const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Wallet = sequelize.define(
  "Wallet",
  {
    wallet_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER, allowNull: false},
    currency_id: {type: DataTypes.INTEGER, allowNull: false},
    balance: {type: DataTypes.DECIMAL, defaultValue: 0},
  },
  {timestamps: true}
);

module.exports = Wallet;
