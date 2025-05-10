// server.js
require('dotenv').config();                // load environment variables

const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');
const bodyParser = require('body-parser');

const app = express();

// CORS: whitelist front-end origin(s) from .env or allow all
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',')
  : ['*'];
app.use(cors({ origin: allowedOrigins }));

// Body parsing
app.use(bodyParser.json());

// Health-check endpoint
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'up' : 'down';
  res.json({
    status: 'ok',
    database: dbStatus,
    uptime: process.uptime()
  });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB', error);
    process.exit(1);
  });

// Import Routes
const blogRoutes = require('./routes/blogs');
const formRoutes = require('./routes/forms');
const carRoutes  = require('./routes/cars');

// Use Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/cars', carRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Jeff\'s Car Blog API');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
