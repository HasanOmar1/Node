// const chalk = require("chalk");
// const getNotes = require("./notes");
// require is the old way.

//import is the new way.
import chalk from "chalk";
import getNotes from "./notes.js";

console.log(getNotes());

console.log(
  `${chalk.yellow(`Hi`)} ${chalk.blue.underline(
    `Hasan`
  )} You Are ${chalk.green.bold(`Successful`)}  ${chalk.red.bold.inverse(
    "ERROR"
  )}`
);
