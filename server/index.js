const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

require('./routes')(app);

app.listen((process.env.SERVER_PORT || 3001), () =>
    console.log(`Proxy server is running on localhost:${process.env.SERVER_PORT || 3001}`)
);

