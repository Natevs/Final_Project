const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('',requireAuth,todoController.getTodos);//needs event handlers

router.get('/:id', requireAuth,todoController.getTodosByID);

router.post('/',requireAuth,todoController.updateTodos);

router.put('/',requireAuth,todoController.createTodos);

router.delete('/:id',requireAuth,todoController.deleteTodos);

module.exports = router;