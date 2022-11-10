const router = require("express").Router();
const List = require("../models/List");
const { verifyFunc } = require("../verifyToken");

//Create list

router.post("/", verifyFunc, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const list = new List(req.body);
      const savedList = await list.save();
      return res.status(201).json(savedList);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("You are not allowed");
});

//delete list

router.delete("/:id", verifyFunc, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      return res.status(200).json("Your list has been successfully deleted");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("You are not allowed");
});

//get

router.get("/", verifyFunc, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          {
            $sample: { size: 10 },
          },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
