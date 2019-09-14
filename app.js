require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const body = require('body-parser');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => {
    throw new Error(err);
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json('Hello world');
});

app.listen(process.env.PORT, () => console.log(`Server listening on PORT ${process.env.PORT}`));
