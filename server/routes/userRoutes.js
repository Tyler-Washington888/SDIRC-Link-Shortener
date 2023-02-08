const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  verifyUser,
} = require("../controllers/userController");

// create user
router.post("/", createUser);

// authenticate user
router.post("/login", loginUser);

// verifyUser
router.get("/verify", verifyUser);

module.exports = router;
