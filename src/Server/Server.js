const express = require('express');
const cors = require('cors');
require('dotenv').config({path: __dirname + '../../../.env'});

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(cors());

const route = require('./routes');

route(app);
app.listen(PORT, () => {
    console.log('Server start');
})