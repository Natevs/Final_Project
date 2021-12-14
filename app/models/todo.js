//not good needs updating 
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const todosSchema = new Schema({
    todoSchema: { type: String, require: true },
    description: { type: String},
    dateDue: { type: Boolean, required: true },
    dateCreated: { type: Date, default: Date.now },
    status: { type: String,enum: ['Todo', 'InProcess', 'Done'],default: 'Todo'}
});

module.exports = Mongoose.model('TodoModel', todosSchema);