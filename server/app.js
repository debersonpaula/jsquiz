const makedata = require('./utils/makedata');
const express = require('express');
const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static('client'));

// app.get('/', (req, res) => res.send('Hello World!'));
app.get('/data', (req, res) => res.json(makedata));

app.all('/*', (req, res, next) => {
    res.sendFile('client/index.html', { root: __dirname });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));