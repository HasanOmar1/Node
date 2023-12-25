// const axios = require("axios");

// async function getCatFact() {
//   try {
//     const response = await axios.get("https://catfact.ninja/fact");
//     console.log(response.data.fact);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getCatFact();

const request = require("request");

const url = "https://catfact.ninja/fact";
request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.fact);
});
