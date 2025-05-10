// backend/routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const slugify = require('slugify');

/**
 * POST /api/blogs
 * Create a new blog post
 */
router.post('/', async (req, res) => {
  try {
    const data = { ...req.body };
    if (!data.slug && data.title) {
      data.slug = slugify(data.title, { lower: true, strict: true });
    }
    const blog = await Blog.create(data);
    return res.status(201).json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({ message: 'Failed to create blog post.', error: error.message });
  }
});

/**
 * GET /api/blogs
 * Retrieve all blog posts (newest first)
 */
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({ message: 'Failed to fetch blog posts.', error: error.message });
  }
});

/**
 * GET /api/blogs/:slug
 * Retrieve a single blog post by slug
 */
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }
    return res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return res.status(500).json({ message: 'Failed to fetch blog post.', error: error.message });
  }
});

/**
 * PUT /api/blogs/:slug
 * Update a blog post by slug
 */
router.put('/:slug', async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.title && !updates.slug) {
      updates.slug = slugify(updates.title, { lower: true, strict: true });
    }
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      updates,
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }
    return res.status(200).json(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return res.status(500).json({ message: 'Failed to update blog post.', error: error.message });
  }
});

/**
 * DELETE /api/blogs/:slug
 * Delete a blog post by slug
 */
router.delete('/:slug', async (req, res) => {
  try {
    const result = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!result) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }
    return res.status(200).json({ message: 'Blog post deleted.' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return res.status(500).json({ message: 'Failed to delete blog post.', error: error.message });
  }
});

module.exports = router;
