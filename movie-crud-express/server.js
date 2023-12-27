import express from "express";
import * as movie from "./functions.js";

const server = express();
server.use(express.json());

server.get("/movies", (req, res) => {
  try {
    res.send(movie.getMovies());
  } catch (error) {
    res.status(404).send(error);
  }
});

server.get("/movies/getMovie", (req, res) => {
  try {
    const title = req.query.title;
    const result = movie.findMovie(title);
    if (!result) {
      throw new Error("Movie not found");
    }
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(404).send(`Movie was not found`);
  }
});

server.post("/movies", (req, res) => {
  try {
    const title = req.body.title;
    const result = movie.createMovie(title);
    if (!result) {
      throw new Error("Movie already Exists");
    }
    res.send(result);
  } catch (error) {
    res.status(409).send(`Movie already exists`);
  }
});

server.put("/movies/:title", (req, res) => {
  try {
    const oldTitle = req.params.title;
    const newTitle = req.body.title;
    const result = movie.updateMovie(oldTitle, newTitle);
    if (!result) {
      throw new Error(`Movie Does'nt exist`);
    }
    res.send(result);
  } catch (error) {
    res.status(404).send("Movie Does`nt exist");
  }
});

server.delete("/movies", (req, res) => {
  try {
    const title = req.query.title;
    const result = movie.deleteMovie(title);
    if (!result) {
      throw new Error(`:D`);
    }
    res.send(result);
  } catch (error) {
    res.status(400).send(`Movie does'nt exist`);
  }
});

server.listen(9999, () => {
  console.log(`Express listening to 9999`);
});
