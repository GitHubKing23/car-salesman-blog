// src/services/carService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cars';

export const fetchCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCar = async (carData) => {
  const response = await axios.post(API_URL, carData);
  return response.data;
};
