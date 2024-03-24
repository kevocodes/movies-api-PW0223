const httpError = require("http-errors");
const Movie = require("../models/movie.model");

const createMovie = async (body) => {
  const newMovie = new Movie(body);

  const savedMovie = await newMovie.save();

  if (!savedMovie) throw httpError(500, "Movie not created");

  return savedMovie;
};

const getMovies = async () => {
  const movies = await Movie.find();

  if (!movies) throw httpError(404, "Movies not found");

  return movies;
};

const getOneMovie = async (id) => {
  const movie = await Movie.findById(id);

  if (!movie) throw httpError(404, "Movie not found");

  return movie;
};

const updateOneMovie = async (id, body) => {
  const toUpdateMovie = await Movie.findById(id);

  if (!toUpdateMovie) throw httpError(404, "Movie not found");

  const updatedMovie = await Movie.findByIdAndUpdate(id, body, {
    new: true,
  });

  if (!updatedMovie) throw httpError(500, "Movie not updated");

  return updatedMovie;
};

const deleteOneMovie = async (id) => {
  const toDeleteMovie = await Movie.findById(id);

  if (!toDeleteMovie) throw httpError(404, "Movie not found");

  const deletedMovie = await Movie.findByIdAndDelete(id);

  if (!deletedMovie) throw httpError(500, "Movie not deleted");

  return deletedMovie;
};

const toggleMovieFavorite = async (id) => {
  const movie = await Movie.findById(id);

  if (!movie) throw httpError(404, "Movie not found");

  movie.favorite = !movie.favorite;

  const updatedMovie = await movie.save();

  if (!updatedMovie) throw httpError(500, "Movie not updated");

  return updatedMovie;
};

module.exports = {
  createMovie,
  getMovies,
  getOneMovie,
  updateOneMovie,
  deleteOneMovie,
  toggleMovieFavorite,
};
