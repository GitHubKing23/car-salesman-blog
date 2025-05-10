// src/services/formService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/forms';

export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/submit`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
