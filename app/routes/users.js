//Good?
const express = require('express');
const router = express.Router();
const userController = require('../controller/users');
const passportService = require('../../config/passport');
const passport = require('passport');

const requireLogin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/',userController.getUsers);//needs event handlers

router.get('/:id', requireAuth,userController.getUsersByID);

router.post('/',userController.updateUsers);

router.put('/',userController.createUsers);

router.delete('/:id',userController.deleteUsers);

router.route('/login').post(requireLogin, login);

module.exports = router;