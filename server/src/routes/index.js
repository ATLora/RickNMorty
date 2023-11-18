const express = require("express");
const router = express.Router();

const getCharById = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const Login = require("../controllers/login");

router.get("/character/:id", getCharById);
router.get("/login", Login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
