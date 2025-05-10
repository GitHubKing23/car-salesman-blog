// backend/models/Car.js
const mongoose = require('mongoose');

// Sub-schema for car images
const pictureSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  caption: {
    type: String
  }
}, { _id: false });

// Helper to generate a random alphanumeric stock number
function generateStockNumber() {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
}

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  mileage: {
    type: Number
  },
  color: {
    type: String
  },
  stockNumber: {
    type: String,
    unique: true,
    default: generateStockNumber
  },
  description: {
    type: String
  },
  pictures: {
    type: [pictureSchema],   // array of image objects with URL and optional caption
    default: []
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Register and export the Car model
const Car = mongoose.model('Car', carSchema);
module.exports = Car;
