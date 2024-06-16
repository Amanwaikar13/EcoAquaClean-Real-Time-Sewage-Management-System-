const mongoose = require('mongoose');

const puneCityDataSchema = new mongoose.Schema({
  value: Number // Assuming the value field contains numeric data
  // You can define additional fields here if needed
});

const PuneCityData = mongoose.model('PuneCityData', puneCityDataSchema);

module.exports = PuneCityData;