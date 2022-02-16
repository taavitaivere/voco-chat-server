/* connects with mongoDB */
const monk = require('monk');
const connection = 'localhost/messages';
const db = monk(connection);

module.exports = db;