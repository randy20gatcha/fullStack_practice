// Build a basic express server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require('./models');
const config = require('./config/config');

// Build an express app, building REST endpoints
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json()); // parse any json request sent in
app.use(cors()); // possible security issues source
require('./routes')(app) // connecting routes

sequelize.sync()
    .then(() => {
        app.listen(config.port); // environment variable
        console.log(`Server on port: ${config.port}`)
    })
