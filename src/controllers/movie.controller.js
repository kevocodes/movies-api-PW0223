const movieService = require("../services/movie.service");

const createMovie = async (req, res, next) => {
  try {
    const { body } = req;

    const savedMovie = await movieService.createMovie(body);

    res.status(201).json({ message: "Movie created", data: savedMovie });
  } catch (error) {
    next(error);
  }
};

const getMovies = async (req, res, next) => {
  try {
    const movies = await movieService.getMovies();

    res.status(200).json({ data: movies });
  } catch (error) {
    next(error);
  }
};

const getOneMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await movieService.getOneMovie(id);

    res.status(200).json({ data: movie });
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedMovie = await movieService.updateOneMovie(id, body);

    res.status(200).json({ message: "Movie updated", data: updatedMovie });
  } catch (error) {
    next(error);
  }
};

const deleteOneMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    await movieService.deleteOneMovie(id);

    res.status(200).json({ message: "Movie deleted" });
  } catch (error) {
    next(error);
  }
};

const toggleMovieFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedMovie = await movieService.toggleMovieFavorite(id);

    res
      .status(200)
      .json({ message: "Update favorite status", data: updatedMovie });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovie,
  getMovies,
  getOneMovie,
  updateMovie,
  deleteOneMovie,
  toggleMovieFavorite,
};
