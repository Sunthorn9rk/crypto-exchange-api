const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password_hash: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, defaultValue: "active"},
  },
  {timestamps: true}
);

User.associate = (models) => {
  User.hasMany(models.Wallet, {foreignKey: "user_id"});
  User.hasMany(models.Order, {foreignKey: "user_id"});
};

module.exports = User;
