const fs = require(`fs`);

fs.writeFileSync("text.txt", "Sup");
fs.writeFileSync("newText.txt", "Hello");
fs.copyFileSync("text.txt", "./newText.txt");
fs.renameSync("./newText.txt", "renamed.txt");
fs.readdirSync("../file-system").forEach((file) => console.log(file));
fs.appendFileSync("./renamed.txt", ", How you doing?");
if (fs.existsSync("../file-system")) {
  console.log(`existsSync : YUP THE DIRECTORY EXISTS`);
}
