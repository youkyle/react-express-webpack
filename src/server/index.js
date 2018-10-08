const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const shop = require('./routes/shop');
const auth = require('./routes/auth');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/shops', shop);
app.use('/api/auth', auth);

app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));


mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/mern-secure', { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));


module.exports = app;
