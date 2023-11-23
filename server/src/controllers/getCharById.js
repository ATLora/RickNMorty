// const axios = require("axios");
// //const http = require("http");

// function getCharById(res, id) {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       console.log(response.data);
//       const { name, gender, species, origin, image, status, id } =
//         response.data;
//       res.writeHead(200, { "Content-Type": "applicatio/json" });
//       res.end(
//         JSON.stringify({ id, name, gender, species, status, origin, image })
//       );
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// }

// module.exports = getCharById;

const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = (await axios(URL + id)).data;
    const { name, gender, species, origin, image, status } = data;
    const character = { name, gender, species, origin, image, status, id };
    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("Character not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCharById;
