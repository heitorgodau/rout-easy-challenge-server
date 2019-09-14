const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliverySchema = new Schema({
  name: String,
  weigth: Number,
  address: {
    location: String,
    number: Number,
    neighborhood: String,
    complement: String,
    city: String,
    state: String,
    country: String,
    geoLocalization: {
      lat: Number,
      long: Number,
    },
  },
});


const Delivery = mongoose.model('Delivery', deliverySchema);
module.exports = Delivery;
