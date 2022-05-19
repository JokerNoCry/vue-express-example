var express = require('express');
var router = express.Router();

var userRouter = require('./user');
var itemRouter = require('./item')

router.use('/user', userRouter);
router.use('/item', itemRouter);

module.exports = router;
