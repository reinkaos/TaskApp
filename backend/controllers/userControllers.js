const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    picture: pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      picture: user.picture,
    });
  } else {
    res.status(400);
    throw new Error("Error occurred while creating user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("Authenticating user:", email);

  const user = await User.findOne({ email });
  if (!user) {
    console.log("User not found:", email);
    res.status(400);
    throw new Error("User not found");
  }

  const isPasswordMatch = await user.matchPassword(password);
  if (!isPasswordMatch) {
    console.log("Invalid password for user:", email);
    res.status(400);
    throw new Error("Invalid email or password");
  }

  console.log("Password match for user:", email);
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    picture: user.picture,
    token: generateToken(user._id),
  });
});

module.exports = { authUser };

module.exports = { registerUser, authUser };
