const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const item = require('./routes/api/item')


const app = express();

app.use(bodyParser.json());

app.use('/api/item', item);

const db = require('./config/key').mongoURI;

mongoose.connect(db).then(() => console.log('Mongo DB connected...'))
                    .catch(err => console.log('Error ' + err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('App running at port ' + port))



