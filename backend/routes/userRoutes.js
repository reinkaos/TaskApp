const express = require("express");
const { registerUser } = require("../controllers/userControllers.js");
const { authUser } = require("../controllers/userControllers.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);

module.exports = router;
