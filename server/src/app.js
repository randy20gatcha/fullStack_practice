// Build a basic express server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// Build an express app, building REST endpoints
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json()); // parse any json request sent in
app.use(cors()); // possible security issues source

/*
    get
    post
    put
    patch
    delete
*/
app.post("/register", (req, res) => {
    res.send({
        message: `You have registered email: ${req.body.email}`
    });
});

app.listen(process.env.PORT || 8081); // environment variable
