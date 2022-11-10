const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const { verifyFunc } = require("../verifyToken");

//UPDATE
router.put("/:id", verifyFunc, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("You can update only your account");
});
//DELETE

router.delete("/:id", verifyFunc, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("User has been deleted");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("You can update only your account");
});
//GET

router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      const { password, ...info } = user._doc;
      return res.status(200).json(info);
    } else {
      return res.status(404).json("User with given id not found");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});
//GET ALL

router.get("/", verifyFunc, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      if (users) {
        const info = users.map((user) => {
          const { password, ...other } = user._doc;
          return other;
        });
        return res.status(200).json(info);
      } else {
        return res.status(404).json("Users not found");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("Not an admin");
});
//GET USER STATS
router.get("/stats", verifyFunc, async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: {
            $sum: 1,
          },
        },
      },
    ]);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(eror);
  }
});

module.exports = router;
