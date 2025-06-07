// src/components/CarMarketplace.js
import React, { useEffect, useState } from 'react';
import { fetchCars } from '../services/carService';
import CarCard from './CarCard';
import './CarMarketplace.css';

const CarMarketplace = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (err) {
        console.error('Failed to load cars', err);
      }
    };
    load();
  }, []);

  return (
    <div className="marketplace">
      <h2>Car Marketplace</h2>
      {cars.length === 0 ? (
        <p>No cars available.</p>
      ) : (
        cars.map(car => <CarCard key={car._id} car={car} />)
      )}
    </div>
  );
};

export default CarMarketplace;
