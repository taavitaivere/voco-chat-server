const Joi = require('joi');
const db = require('./connectDB');

const schema = Joi.object().keys({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    message: Joi.string()
        .min(3)
        .max(500)
        .required(),
})
const messages = db.get('messages');

function getAll() {
    return messages.find();
}

function create(message) {
    const value = schema.validate(message);
    if (value.error == null) {
        message.created = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(value.error);
    }
}

module.exports = {
    create,
    getAll
};