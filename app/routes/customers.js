//good? update like users?
const express = require('express');
const router = express.Router();
const customerController = require('../controller/customers');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/',customerController.getCustomers);//needs event handlers

router.get('/:id', requireAuth,customerController.getCustomerByID);

router.post('/',customerController.updateCustomer);

router.put('/',customerController.createCustomer);

router.delete('/:id', requireAuth,customerController.deleteCustomer);

module.exports = router;