// backend/models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  income: Number,
  message: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', formSchema);
