const router = require('express').Router();

const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../users/users-router.js')

const restricted = require('../auth/restricted-middleware');

router.use('/auth', authRouter)
router.use('/users', restricted, usersRouter)

router.get('/', (req, res) => {
  res.status(200).json({ api: "WORKING" })
})
module.exports = router;