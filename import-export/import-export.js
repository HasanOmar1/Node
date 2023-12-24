// What is the difference between import and require?

// require uses module.exports, which is the "old" (but still valid) syntax for exporting a module,
// which can be anything we want, an object, a string, etc.

// import uses both, ie, you can use module.exports and export,
// and it allows you to export various pieces of code more or less like module.export did.

// -------------------------------------
// How can you enable using the import syntax using node js?

// by installing package.json ( npm init ) then add in the json a type of module .

// -------------------------------------

// Give 2 node.js environment variables that are not available when using the import syntax.
// console.log(__dirname);
// console.log(__filename);
// -------------------------------------

// Create 3 functions using the export/import syntax.

import { add, minus, divide } from "./functions.js";
console.log(add(10, 5));
console.log(minus(10, 5));
console.log(divide(10, 5));

// -------------------------------------

// Import the file system module using the import syntax.
import * as fs from "fs";

fs.writeFileSync("text.txt", "Sup");
fs.writeFileSync("newText.txt", "Hello");
fs.copyFileSync("text.txt", "./newText.txt");
fs.renameSync("./newText.txt", "renamed.txt");
fs.readdirSync("../file-system").forEach((file) => console.log(file));
fs.appendFileSync("./renamed.txt", ", How you doing?");
if (fs.existsSync("../file-system")) {
  console.log(`existsSync : YUP THE DIRECTORY EXISTS`);
}
