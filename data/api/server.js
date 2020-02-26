const express = require('express');
const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleWare.js')

const server = express();
configureMiddleware(server);

server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.status(200).json({ server: "WORKING" })
})

module.exports = server