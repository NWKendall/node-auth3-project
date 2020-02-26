requestAnimationFrame('dotenv').config();

const server = require ('./data/api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => coneole.log(`*** Server listening on port: ${port}`));