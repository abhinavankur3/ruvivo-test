const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { signUpMiddleware, authMiddleware } = require("../middleware");
const { comaprePassword } = require("../utils");
const userController = require("../controller/user.controller");

// SET STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || "";
    cb(null, "profile" + "-" + Date.now() + ext);
  },
});

// CREATE UPLOAD OBJECT
const upload = multer({ storage: storage });

// Register API
router.post("/user", upload.single("image"), signUpMiddleware, userController.signup);

module.exports = router;
