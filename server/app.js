const makedata = require('./utils/makedata');
const express = require('express');
const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/quiz', (req, res) => res.json(makedata));

app.listen(3000, () => console.log('Example app listening on port 3000!'));