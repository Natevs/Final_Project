//not good needs updating 
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const todoSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    status: { type: Boolean, default: true },
    email: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    password: { type: String, required: true }
});

module.exports = Mongoose.model('TodoModel', todoSchema);