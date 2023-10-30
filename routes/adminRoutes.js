const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getallusers,
  getalldoctors,
  changeaccountstatus,
} = require("../controllers/adminController.js");

router.post("/getalluser", authMiddleware, getallusers);
router.post("/getalldoctors", authMiddleware, getalldoctors);
router.post("/changeaccountstatus", authMiddleware, changeaccountstatus);
module.exports = router;
