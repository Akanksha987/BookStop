const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const JWT_SECRET_KEY = "MyKey";
const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword, phone, qualifications } =
    req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists ! Login instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const hashedConfirmPassword = bcrypt.hashSync(confirmPassword);

  const user = new User({
    name,
    email,
    phone,
    password: hashedPassword,
    qualifications,
    confirmPassword: hashedConfirmPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: user });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(400).json({ msg: "User not found. Please Signup" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ msg: "Invalid Email or Password" });
  }

  const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, {
    expiresIn: "30s",
  });

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: "lax",
  });

  return res
    .status(200)
    .json({ msg: "Successfully Logged In", user: existingUser, token });
};
const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];

  console.log(token);
  if (!token) {
    res.status(404).json({ msg: "No token found" });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: "Invalid Token" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
};

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (err) {
    return new Error(err);
  }
  if (!user) {
    return res.status(404).json({ msg: "User Not Found" });
  }
  return res.status(200).json({ user });
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
