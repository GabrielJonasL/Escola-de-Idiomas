const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const estudanteRoutes = require("./routes/estudanteRoutes");

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rota
app.use("/estudante", estudanteRoutes);

module.exports = app;
