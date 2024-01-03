import STATUS_CODE from "../constants/statusCodes.js";
import {
  createMovieDB,
  deleteMovieDB,
  getAllMoviesDB,
  getMovieByIdDB,
  getMovieByTitleDB,
  updateMovieDB,
} from "../models/movieModel.js";

// @des      Get all the movies
// @route    GET /api/v1/movies
// @access   Public
export const getAllMovies = async (req, res, next) => {
  try {
    const movies = await getAllMoviesDB();
    res.send(movies);
  } catch (error) {
    next(error);
  }
};

// @des      Get a single movie
// @route    GET /api/v1/movies/:id
// @access   Public
export const getMovieById = async (req, res, next) => {
  try {
    const movie = await getMovieByIdDB(req.params.id);
    if (!movie) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Movie was not found");
    }
    res.send(movie);
  } catch (error) {
    next(error);
  }
};

// @des      Create a movie
// @route    POST /api/v1/movies
// @access   Public
export const createMovie = async (req, res, next) => {
  try {
    const { title, director, releaseYear, rating } = req.body;
    if (!title || !director || isNaN(rating) || isNaN(releaseYear)) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error(
        "All fields (title, director, releaseYear, rating) are required"
      );
    }
    // check for existing movie with the same title
    const existingMovie = await getMovieByTitleDB(title);
    if (existingMovie) {
      res.status(STATUS_CODE.CONFLICT);
      throw new Error("A movie with the same title already exist");
    }
    const newMovie = await createMovieDB({
      title,
      director,
      releaseYear,
      rating,
    });
    res.status(STATUS_CODE.CREATED);
    res.send(newMovie);
  } catch (error) {
    res.status(STATUS_CODE.BAD_REQUEST);
    next(error);
  }
};

// @des      Update a movie
// @route    PUT /api/v1/movies/:id
// @access   Public
export const updateMovie = async (req, res, next) => {
  try {
    const { title, director, releaseYear, rating } = req.body;
    if (!title || !director || isNaN(rating) || isNaN(releaseYear)) {
      res.status(STATUS_CODE.BAD_REQUEST);
      throw new Error(
        "All fields (title, director, releaseYear, rating) are required"
      );
      // Check if another movie with the same title exists (excluding the current movie)
    }
    const existingMovie = await getMovieByTitleDB(title);
    if (existingMovie && existingMovie._id.toString() !== req.params.id) {
      res.status(STATUS_CODE.CONFLICT);
      throw new Error("A movie with the same title already exist");
    }
    const updatedMovie = await updateMovieDB(req.params.id, {
      title,
      director,
      releaseYear,
      rating,
    });
    if (!updatedMovie) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("Movie was not found");
    }
    res.send(updatedMovie);
  } catch (error) {
    next(error);
  }
};

// @des      delete a movie
// @route    DELETE /api/v1/movies/:id
// @access   Public
export const deleteMovie = async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const movie = await getMovieByIdDB(movieId);
    if (!movie) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("movie was not found");
    }
    await deleteMovieDB(movieId);
    res.send({ message: "Movie was deleted", data: movie });
  } catch (error) {
    next(error);
  }
};
