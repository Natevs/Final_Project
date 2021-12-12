const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const passportService = require('../../config/passport');

const requireLogin = passport.authenticate('local', { session: false });

router.get('todo', requireAuth,todoController.getTodos);//needs event handlers

router.get('/todo/:id', requireAuth,todoController.getTodosByID);

router.post('/todo', requireAuth,todoController.updateTodos);

router.put('/', requireAuth,todoController.createTodos);

router.delete('/todo/:id', requireAuth,todoController.deleteTodos);

router.route('/todo/login').post(requireLogin, login);

module.exports = router;