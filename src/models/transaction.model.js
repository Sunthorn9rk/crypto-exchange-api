const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Transaction = sequelize.define(
  "Transaction",
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sender_wallet_id: {type: DataTypes.INTEGER, allowNull: true},
    receiver_wallet_id: {type: DataTypes.INTEGER, allowNull: true},
    amount: {type: DataTypes.DECIMAL, allowNull: false},
    transaction_type: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, defaultValue: "pending"},
  },
  {timestamps: true}
);

module.exports = Transaction;
