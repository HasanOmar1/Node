import express from "express";

const server = express();
server.use(express.json());

server.get("/numbers", (req, res) => {
  res.send("Success using GET");
});

server.post("/numbers", (req, res) => {
  res.send("Success using POST");
});

server.put("/numbers", (req, res) => {
  res.send("Success using PUT");
});

server.delete("/numbers", (req, res) => {
  res.send("Success using DELETE");
});

server.listen(9999, () => {
  console.log(`Express is listening on port 9999`);
});
