const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({path: __dirname + '../../../.env'});

const PORT = process.env.SERVER_PORT || 3001;

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const route = require('./routes');
const db = require('./database/Mongo');
db.connect();

route(app);
app.listen(PORT, () => {
    console.log(`Server start at http://localhost:${PORT}`);
})