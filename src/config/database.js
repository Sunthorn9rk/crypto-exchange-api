const {Sequelize} = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "sqlite",
  storage: "./database.sqlite", // ใช้ SQLite ใน local development
  logging: false, // ปิดการ log query
});

module.exports = sequelize;
