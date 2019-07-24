const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 4000);
app.set('ruta', path.join(__dirname + './../../build'));
//app.use(express.static('/Users/ignacioainolrivera/Documents/Node Projects/mern-stack/build'));
app.use(express.static(path.join(__dirname + './../../build/')));

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;