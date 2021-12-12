//Good?
const express = require('express');
const router = express.Router();
const userController = require('../controller/users');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const passportService = require('../../config/passport');

const requireLogin = passport.authenticate('local', { session: false });

router.get('/users', requireAuth,userController.getUsers);//needs event handlers

router.get('/users/:id', requireAuth,userController.getUsersByID);

router.post('/users', requireAuth,userController.updateUsers);

router.put('/', requireAuth,userController.createUsers);

router.delete('/users/:id', requireAuth,userController.deleteUsers);

router.route('/users/login').post(requireLogin, login);

module.exports = router;