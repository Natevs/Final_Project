const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const todoRouter = require('./todo');
const customerRouter = require('./customers');

router.use('/users', userRouter);
router.use('/todo', todoRouter);
router.use('/customers', customerRouter);

module.exports = router;