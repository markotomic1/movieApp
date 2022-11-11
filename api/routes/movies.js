const Movie = require("../models/Movie");
const { verifyFunc } = require("../verifyToken");
const router = require("express").Router();

//CREATE

router.post("/", verifyFunc, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      return res.status(201).json(savedMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(401).json("You are not admin");
  }
});

//UPdate

router.put("/:id", verifyFunc, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("You are not allowed");
});

//DELETE

router.delete("/:id", verifyFunc, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      return res.status(200).json("Successfully deleted movie");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("You are not allowed");
});

//Get single movie

router.get("/find/:id", verifyFunc, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//Get random move

router.get("/random", verifyFunc, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        {
          $sample: { size: 1 },
        },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        {
          $sample: { size: 1 },
        },
      ]);
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get all movies
router.get("/", verifyFunc, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      return res.status(200).json(movies.reverse());
    } catch (error) {
      return res.status(500).json(error);
    }
  } else return res.status(403).json("You are not allowed");
});

module.exports = router;
