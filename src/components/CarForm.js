// src/components/CarForm.js
import React, { useState } from 'react';
import { createCar } from '../services/carService';
import './CarForm.css';

const emptyPic = { url: '', caption: '' };

const CarForm = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    pictures: [{ ...emptyPic }, { ...emptyPic }, { ...emptyPic }, { ...emptyPic }]
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCarData(prev => ({ ...prev, [name]: value }));
  };

  const handlePicChange = (index, field, value) => {
    const pics = [...carData.pictures];
    pics[index][field] = value;
    setCarData(prev => ({ ...prev, pictures: pics }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const payload = { ...carData, year: Number(carData.year), price: Number(carData.price) };
    try {
      await createCar(payload);
      alert('Car created');
    } catch (err) {
      alert('Failed to create car');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <h2>Add Car</h2>
      <input name="make" value={carData.make} onChange={handleChange} placeholder="Make" required />
      <input name="model" value={carData.model} onChange={handleChange} placeholder="Model" required />
      <input name="year" type="number" value={carData.year} onChange={handleChange} placeholder="Year" required />
      <input name="price" type="number" value={carData.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="description" value={carData.description} onChange={handleChange} placeholder="Description" />
      <h3>Pictures</h3>
      {carData.pictures.map((pic, idx) => (
        <div key={idx} className="pic-input">
          <input value={pic.url} onChange={e => handlePicChange(idx, 'url', e.target.value)} placeholder={`Image ${idx+1} URL`} />
          <input value={pic.caption} onChange={e => handlePicChange(idx, 'caption', e.target.value)} placeholder="Caption" />
        </div>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

export default CarForm;
