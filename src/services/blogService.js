// src/services/blogService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs';

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};
