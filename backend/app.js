const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noticeRoutes = require('./routes/notices');
const usersRoutes = require('./routes/users');
const queriesRoutes = require('./routes/queries');

const app = express();

const url = 'mongodb://127.0.0.1:27017/schoolar';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, UPDATE, DELETE, OPTIONS');
  next();
})

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/notices', noticeRoutes);
app.use('/api/v1/queries', queriesRoutes);

module.exports = app;
