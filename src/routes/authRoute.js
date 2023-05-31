const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const upload = require("../middlewares/fileMiddleware");

router.post('/register', upload.single(file),authController.register);
router.post('/login', authController.login);
module.exports = router;
