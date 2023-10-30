const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotifications,
  deleteAllNotifications,
  getAllDoctors,
  bookappoinment,
  availability,
  userAppoinments,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);
//Auth Post
router.post("/getUserData", authMiddleware, authController);
//Apply Post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification Doctor
router.post("/all-notifications", authMiddleware, getAllNotifications);

//Delete Notification Doctor
router.post("/delete-notifications", authMiddleware, deleteAllNotifications);

//get all routes
router.post("/getAllDoctors", getAllDoctors);

router.post("/book-appoinment", bookappoinment);

router.post("/availability", availability);
router.post("/userAppoinments", userAppoinments);

module.exports = router;
