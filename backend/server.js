// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });

// Import Routes
const blogRoutes = require('./routes/blogs');
const formRoutes = require('./routes/forms');

// Use Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/forms', formRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Jeff\'s Car Blog API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

