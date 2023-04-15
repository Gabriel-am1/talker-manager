const express = require('express');
const talkerRouters = require('./routes/talkerRouters');

const app = express();

app.use(express.json());
app.use('/talker', talkerRouters);

module.exports = app;