/* for creating back-end api*/
const express = require('express');

/* tool for log all of the incoming requests, good for debuging*/
const morgan = require('morgan');

/* for client to talk with front-end*/
const cors = require('cors');

/* for allowing back-end to understand the data that we send from front-end*/
const bodyParser = require('body-parser');

const messages = require('./db/messageDB');

const app = express();
/* 'tiny' represents the kind of log that it's going to add */
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: "hey hey hey"
    });
});

app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});

/* when we receive a post request on slash messages we are gonna take the body of the request and attempt to insert it into the database*/
app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    })
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});