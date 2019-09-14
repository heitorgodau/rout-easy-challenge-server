require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');

// DB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => {
    throw new Error(err);
  });

const app = express();

// CORS
// app.use(cors({
//   credentials: true,
//   origin: ['http://localhost:3000'], // <== this will be the URL of React app (it will be running on port 3000)
// }));

app.use(bodyParser.json());

// routs
const deliveryRouts = require('./routes/delivery-routs');

app.use('/api', deliveryRouts);

app.listen(process.env.PORT, () => console.log(`Server listening on PORT ${process.env.PORT}`));
