const router = require('express').Router();
const usersData = require('./users-model.js');

router.get('/', (req, res) => {
  usersData
    .getUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(({ name, message, code, stack}) => {
      res.status(500).json({ name, message, code, stack })
    })
})
module.exports = router