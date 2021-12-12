const logger = require('../../config/logger');
const Mongoose = require('mongoose');
const Todos = Mongoose.model('TodoModel');

getTodos = (req, res, next) => {
    logger.log('Getting todo', 'info');
    const query = Todos.find({}, (error, todo) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todo);
        }
    })
};

getTodosByID = (req, res, next) => {
    logger.log('Getting todo ' + req.params.id, 'info');
    const query = Todos.findOne({ _id: req.params.id }, (error, todo) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todo);
        }
    })
};

createTodos = (req, res, next) => {
    logger.log('Create todo');
    let todo = new Todos(req.body);
    todo.save().then(result => {
        res.status(200).json(result);
    });
}

updateTodos = (req, res, next) => {
    Todos.findOneAndUpdate({ _id: req.body._id }, req.body, {
        new: true, safe: true,
        multi: false
    }, (error, todo) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todo);
        }
    })
}

deleteTodos = (req, res, next) => {
    Todos.remove({ _id: req.params.id }, (error, todo) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(todo);
        }
    });
}

module.exports = {
    getTodos,
    getTodosByID,
    createTodos,
    updateTodos,
    deleteTodos
}