// middleware designed to restrict access to certain endpoints. 
// Authorization must exist in header, and be valid, with imported secret needing to match json web token

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js');


module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(`2`, authorization)
  if(authorization){
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ message: 'Invalid Credentials' });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    })
  } else {
    res.status(400).json({ message: 'No Credentials Provided'});
  }
}