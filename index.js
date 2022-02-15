/* for creating back-end api*/
const express = require('express');

/* tool for log all of the incoming requests, good for debuging*/
const morgan = require('morgan');

/* for client to talk with front-end*/
const cors = require('cors');

/* for allowing back-end to understand the data that we send from front-end*/
const bodyParser = require('body-parser');


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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});