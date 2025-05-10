// backend/routes/forms.js
const express = require('express');
const router = express.Router();
const Form = require('../models/form');

// Route to handle form submission
router.post('/submit', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(200).json({ message: 'Form submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit form.' });
  }
});

module.exports = router;
