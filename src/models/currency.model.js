const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Currency = sequelize.define(
  "Currency",
  {
    currency_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    currency_code: {type: DataTypes.STRING, allowNull: false},
    currency_name: {type: DataTypes.STRING, allowNull: false},
  },
  {timestamps: false}
);

module.exports = Currency;
