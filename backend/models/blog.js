// backend/models/Blog.js
const mongoose = require('mongoose');
const slugify = require('slugify');

const embedSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['youtube', 'tiktok'],
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, { _id: false });

const sectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  body:    { type: String, required: true },
  images:  { type: [String], default: [] },
  embeds:  { type: [embedSchema], default: [] }
}, { _id: false });

const blogSchema = new mongoose.Schema({
  title:   { type: String, required: true },
  slug:    { type: String, required: true, unique: true },
  excerpt: { type: String },
  author:  { type: String, default: 'Jeff' },
  sections:{ type: [sectionSchema], required: true, validate: v => Array.isArray(v) && v.length > 0 },
  date:    { type: Date, default: Date.now }
}, { timestamps: true });

// Auto-generate slug from title
blogSchema.pre('validate', function(next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
