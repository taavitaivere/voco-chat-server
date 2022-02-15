const Joi = require('joi');
const db = require('./connectDB');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required,
    message: Joi.string().max(500).required,
})
const messages = db.get('messages');

function getAll() {
    return messages.find();
}

function create(message) {
    const results = Joi.validate(message, schema);
    if (result.error == null) {
        message.created = new Data();
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}
module.export = {
    create,
    getAll
};