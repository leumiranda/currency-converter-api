const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
  from: String,
  to: String,
  rate: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Currency', CurrencySchema);
