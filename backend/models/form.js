// backend/models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  income: {
    type: Number
  },
  desiredCar: {
    type: String
  },
  message: {
    type: String
  },
  signature: {
    type: String,        // base64-encoded PNG of user signature
    required: true
  },
  appointment: {
    type: Date,          // scheduled appointment date/time
    required: true
  }
}, {
  timestamps: true        // adds createdAt and updatedAt
});

module.exports = mongoose.models.Form || mongoose.model('Form', formSchema);
