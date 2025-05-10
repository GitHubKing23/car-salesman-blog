// backend/routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Route to add a new blog post
router.post('/add', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(200).json({ message: 'Blog post added successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add blog post.' });
  }
});

// Route to get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch blog posts.' });
  }
});

module.exports = router;
