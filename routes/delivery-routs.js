const express = require('express');
const mongoose = require('mongoose');
const Delivery = require('../models/Delivery');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Server is running');
});

router.get('/all-deliveries', async (req, res) => {
  const result = await Delivery.find();
  try {
    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
});

router.post('/create-delivery', async (req, res) => {
  const result = await Delivery.create(req.body);
  try {
    res.json(`new delivery was created succesfuly: ${result}`);
  } catch (error) {
    throw new Error(error);
  }
});

router.get('/delete-delivery/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  const { id } = req.params;
  const result = await Delivery.findByIdAndDelete(id);
  try {
    res.status(200).json(`Delivery ${result} deleted successfuly`);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
