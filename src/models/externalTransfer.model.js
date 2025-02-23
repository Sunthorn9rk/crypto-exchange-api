const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const ExternalTransfer = sequelize.define(
  "ExternalTransfer",
  {
    transfer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wallet_id: {type: DataTypes.INTEGER, allowNull: false},
    external_address: {type: DataTypes.STRING, allowNull: false},
    amount: {type: DataTypes.DECIMAL, allowNull: false},
    status: {type: DataTypes.STRING, defaultValue: "pending"},
  },
  {timestamps: true}
);

module.exports = ExternalTransfer;
