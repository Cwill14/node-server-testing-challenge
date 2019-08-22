const express = require("express");

const dwarvesRouter = require('../dwarves/dwarves-router.js')

const server = express();

server.use(express.json());

server.use('/dwarves', dwarvesRouter)

server.get('/', (req, res) => {
    res.status(200).json({ Dustin: "It's working!" });
})




module.exports = server;