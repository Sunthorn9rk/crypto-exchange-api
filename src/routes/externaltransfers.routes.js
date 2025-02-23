const express = require("express");
const router = express.Router();
const ExternalTransferController = require("../controllers/externaltransfer.controller");

// POST: โอนเหรียญไปยังที่อยู่นอกระบบ
router.post("/", ExternalTransferController.createExternalTransfer);

// GET: ดึงข้อมูลการโอนทั้งหมด
router.get("/", ExternalTransferController.getAllExternalTransfers);

// GET: ดึงข้อมูลการโอนตาม ID
router.get("/:transferId", ExternalTransferController.getExternalTransferById);

module.exports = router;
