const {Sequelize} = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_STORAGE || "./database.sqlite", // ใช้ SQLite ใน local  development เก็บฐานข้อมูลในไฟล์ database.sqlite
  logging: process.env.DB_LOGGING === "true", // ปิดการ log query
});

module.exports = sequelize;
