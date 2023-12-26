import http from "node:http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  const { url, method } = req;

  switch (url) {
    case "/":
      switch (method) {
        case "GET":
          const indexHtml = fs.readFileSync("./src/index.html", "utf-8");
          res.end(indexHtml);
          return;
      }

    case "/styles.css":
      const indexCss = fs.readFileSync("./src/styles.css", "utf-8");
      // res.writeHead(200, {
      //   "Content-Type": "text/css",
      // });

      res.end(indexCss);
      return;

    case "/index.js":
      const indexJs = fs.readFileSync("./src/index.js", "utf-8");
      // res.writeHead(200, {
      //   "Content-Type": "application/javascript",
      // });
      res.end(indexJs);
      return;

    case "/raw-html":
      switch (method) {
        case "GET":
          res.end("<h1>Welcome</h1>");
          return;
      }

    case "/users":
      switch (method) {
        case "GET":
          const users = fs.readFileSync("./src/users.json", "utf-8");
          res.end(users);
          return;
      }
  }
});

server.listen(9999, () => {
  console.log(`listening to 9999`);
});
