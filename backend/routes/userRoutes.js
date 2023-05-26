const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const detailValidation = require("../Middleware/detailValidation");
const router = express.Router();

router.post("/signup", detailValidation, authController.signup);
router.post("/login", authController.login);
router.route("/").get(userController.getAllUsers);

module.exports = router;
