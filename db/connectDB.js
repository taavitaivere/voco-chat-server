/* connects with mongoDB */
const monk = require('monk');
const connection = 'local/messages';
const db = monk(connection);

module.exports = db;