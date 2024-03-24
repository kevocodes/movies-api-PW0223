const express = require("express");
const router = express.Router();

const {
  createMovie,
  getMovies,
  getOneMovie,
  updateMovie,
  deleteOneMovie,
  toggleMovieFavorite,
} = require("../controllers/movie.controller");

const {
  idInParams,
  createMovieValidator,
  updateMovieValidator,
} = require("../validators/movie.validator");

const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createMovieValidator, runValidation, createMovie);
router.get("/", getMovies);
router.get("/:id", idInParams, runValidation, getOneMovie);
router.put(
  "/:id",
  idInParams,
  updateMovieValidator,
  runValidation,
  updateMovie
);
router.delete("/:id", idInParams, runValidation, deleteOneMovie);
router.patch("/favorite/:id", idInParams, runValidation, toggleMovieFavorite);

module.exports = router;
