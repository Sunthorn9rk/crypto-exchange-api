const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

// GET: ดึงข้อมูลผู้ใช้ทั้งหมด
router.get("/users", UserController.getAllUsers);

// GET: ดึงข้อมูลผู้ใช้ตาม ID
router.get("/user/:id", UserController.getUserById);

// POST: สร้างผู้ใช้ใหม่
router.post("/user", UserController.createUser);

// PUT: แก้ไขข้อมูลผู้ใช้
router.put("/user/:id", UserController.updateUser);

// DELETE: ลบผู้ใช้
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
