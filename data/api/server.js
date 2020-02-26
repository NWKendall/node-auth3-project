const express = require('express');
// const apirouter = require('')
const configureMiddleware = require('./configure-middleWare')

const server = express();
configureMiddleware(server);


server.get('/api', (req, res) => {
  res.status(200).json({ api: "WORKING" })
})

module.exports = server