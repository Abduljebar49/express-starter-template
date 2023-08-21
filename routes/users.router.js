var express = require('express');
const { getUsers, getUser } = require('../controller/user.controller')
var router = express.Router();

router.get('/users', getUsers)
router.get('/user/:id', getUser)
module.exports = router;
