const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { validateSignup, validateLogin } = require("../middleware/validation");

router.post("/signup", validateSignup, authController.signup);
router.post("/login", validateLogin, authController.login);

module.exports = router;
