//good? update like users?
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customers');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/customers', requireAuth,customerController.getCustomers);//needs event handlers

router.get('/customers/:id', requireAuth,customerController.getCustomerByID);

router.post('/customers', requireAuth,customerController.updateCustomer);

router.put('/', requireAuth,customerController.createCustomer);

router.delete('/customers/:id', requireAuth,customerController.deleteCustomer);
