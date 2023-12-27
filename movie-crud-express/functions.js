import * as fs from "fs";

export function getMovies() {
  try {
    const dataBuffer = fs.readFileSync("database.json", "utf-8");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

export function saveMovie(movie) {
  const dataJSON = JSON.stringify(movie);
  fs.writeFileSync("database.json", dataJSON);
}

export function createMovie(movieTitle) {
  const movies = getMovies();
  const duplicateMovie = movies.find((movie) => movie.title === movieTitle);
  if (!duplicateMovie) {
    movies.push({
      title: movieTitle,
    });
    saveMovie(movies);
    console.log(`Movie has been added`);
  } else {
    console.log(`Movie already Exists!`);
  }
  return duplicateMovie ? false : { title: movieTitle };
}

export function deleteMovie(title) {
  const movies = getMovies();
  const filteredMovies = movies.filter((movie) => movie.title !== title);
  saveMovie(filteredMovies);
  return filteredMovies.length === movies.length ? false : filteredMovies;
}

export function updateMovie(title, newTitle) {
  const movies = getMovies();
  const findMovie = movies.find((movie) => movie.title === title);

  const updatedMovies = movies.map((movie) => {
    if (movie.title !== title) {
      return movie;
    } else {
      return {
        title: newTitle,
      };
    }
  });
  saveMovie(updatedMovies);
  return findMovie ? { title: newTitle } : false;
}

export function findMovie(movieTitle) {
  const movies = getMovies();
  const findMovie = movies.find((movie) => movie.title === movieTitle);
  return findMovie;
}
