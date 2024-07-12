



const express = require("express");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const { sendcookie } = require("../utils/features");

const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usr = await user.findOne({ email }).select("+password");
       console.log("user hai ya nahiii ",usr);
    if (!usr) {
     
      return res.status(404).json({
        success: false,
        message: "User does not exist ,register first",
      });
    }

    const isMatch = await bcrypt.compare(password, usr.password);

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    sendcookie(usr, res, `Welcome here, ${usr.name}`, 200);
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});

// Register route
router.post("/new", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let usr = await user.findOne({ email });

    if (usr) {
      return res.status(404).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    usr = await user.create({ name, email, password: hashedPassword });

    sendcookie(usr, res, "Registered successfully", 201);
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
});

// Logout route
router.get("/logout", (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
});

module.exports = router;
