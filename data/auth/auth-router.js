const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const { jwtSecret } = require('../config/secrets.js')
const usersData = require('../users/users-model.js');


router.post(('/register'), (req, res) => {
  let newUser = req.body;

  const hash = bcrypt.hashSync(newUser.password, 12);

  newUser.password = hash;

  usersData
    .registerUser(newUser)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(({ name, message, code, stack}) => {
      res.status(500).json({ name, message, code, stack })
    })
})


router.post(('/login'), (req, res) => {
  let { username, password } = req.body;

  usersData
    .getUser({ username })
    .first()
    .then( user => {
      if ( user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token })
      } else {
        res.status(401).json({ error: 'Invalid Credentials'})
      }     
    })
    .catch(({ name, message, code, stack}) => {
      res.status(500).json({ name, message, code, stack })
    })
})



function generateToken(user){
  const payload ={
      username: user.username,
      role: user.role || 'user'
  }
  const options = {
    expiresIn: "1h"
  }
  return jwt.sign(payload, jwtSecret, options)
}
module.exports = router;