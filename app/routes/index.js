const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const todoRouter = require('./todo');

router.use('/users', userRouter);
router.use('/todo', todoRouter);

module.exports = router;