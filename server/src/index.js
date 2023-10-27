const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("/rickandmorty/character")) {
      const id = +req.url.split("/").pop();
      getCharById(res, id);
    } else {
      res.writeHead(404, { "Content-Type": "applicatio/json" });
      res.end(JSON.stringify({ error: "Not found" }));
    }
  })
  .listen(PORT, "localhost");
