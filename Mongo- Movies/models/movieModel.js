import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";
import { DATABASE_COLLECTIONS } from "../constants/databaseCollections.js";

export const getAllMoviesDB = async () => {
  const db = getDB();
  return await db.collection(DATABASE_COLLECTIONS.MOVIES).find({}).toArray();
};

export const getMovieByIdDB = async (id) => {
  const db = getDB();
  if (!ObjectId.isValid(id)) {
    throw new Error("Movie was not found");
  }
  const movieId = new ObjectId(id);
  return await db
    .collection(DATABASE_COLLECTIONS.MOVIES)
    .findOne({ _id: movieId });
};

export const createMovieDB = async (movie) => {
  const db = getDB();
  const result = await db
    .collection(DATABASE_COLLECTIONS.MOVIES)
    .insertOne(movie);

  const insertId = result.insertedId;
  return await getMovieByIdDB(insertId.toString());
};

export const getMovieByTitleDB = async (title) => {
  const db = getDB();
  return await db.collection(DATABASE_COLLECTIONS.MOVIES).findOne({ title });
};

export const updateMovieDB = async (id, updateMovie) => {
  const db = getDB();
  const movieId = new ObjectId(id);
  await db
    .collection(DATABASE_COLLECTIONS.MOVIES)
    .updateOne({ _id: movieId }, { $set: updateMovie });
  return await getMovieByIdDB(id);
};

export const deleteMovieDB = async (id) => {
  const db = getDB();
  const movieId = new ObjectId(id);
  return await db
    .collection(DATABASE_COLLECTIONS.MOVIES)
    .deleteOne({ _id: movieId });
};
