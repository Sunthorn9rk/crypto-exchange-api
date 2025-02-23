const express = require("express");
const router = express.Router();
const TransactionController = require("../controllers/transaction.controller");

// GET: ดึงข้อมูลธุรกรรมทั้งหมด
router.get("/", TransactionController.getAllTransactions);

// POST: สร้างธุรกรรม
router.post("/", TransactionController.createTransaction);

// GET: ดึงรายละเอียดธุรกรรมตาม ID
router.get("/:transactionId", TransactionController.getTransactionById);

module.exports = router;
