const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("wrong  mail");

    const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJs.enc.Utf8);

    if (originalPassword === req.body.password) {
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
      const { password, ...info } = user._doc;
      return res.status(200).json({ ...info, accessToken });
    } else {
      return res.status(401).json("wrong password");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
