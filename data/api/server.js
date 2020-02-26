const express = require('express');
// const apirouter = require('')
// const configureMiddleware = require('')

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: WORKING })
})

module.exports = server