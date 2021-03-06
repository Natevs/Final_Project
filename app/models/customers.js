//Good?
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const customerSchema = new Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    company: {type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true }
});

module.exports = Mongoose.model('CustomerModel', customerSchema);