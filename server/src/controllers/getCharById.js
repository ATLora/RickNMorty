const axios = require("axios");
//const http = require("http");

function getCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      console.log(response.data);
      const { name, gender, species, origin, image, status, id } =
        response.data;
      res.writeHead(200, { "Content-Type": "applicatio/json" });
      res.end(
        JSON.stringify({ id, name, gender, species, status, origin, image })
      );
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
}

module.exports = getCharById;
