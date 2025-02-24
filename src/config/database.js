const {Sequelize} = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // ใช้ SQLite ใน local  development เก็บฐานข้อมูลในไฟล์ database.sqlite
  logging: false, // ปิดการ log query
});

module.exports = sequelize;
