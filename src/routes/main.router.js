const express = require("express");
const router = express.Router();

const moviesRouter = require("./movie.router");

router.use("/movies", moviesRouter);

module.exports = router;
