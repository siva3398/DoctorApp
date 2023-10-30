const express = require("express");
const {
  doctorInfo,
  updateProfile,
  getSingleDoctor,
} = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/doctorinfo", authMiddleware, doctorInfo);
router.post("/updateProfile", authMiddleware, updateProfile);

router.post("/getsingleDoctor", getSingleDoctor);

module.exports = router;
