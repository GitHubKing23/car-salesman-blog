// src/components/CarCard.js
import React from 'react';
import './CarCard.css';

const FACEBOOK_GROUP = 'https://www.facebook.com/profile.php?id=61567728622729';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h3>{car.year} {car.make} {car.model}</h3>
      <p className="price">${car.price.toLocaleString()}</p>
      <div className="images">
        {car.pictures.slice(0, 4).map((pic, index) => (
          <img key={index} src={pic.url} alt={pic.caption || `car-${index}`} />
        ))}
      </div>
      <p className="description">{car.description}</p>
      <a className="buy-link" href={FACEBOOK_GROUP} target="_blank" rel="noopener noreferrer">
        Purchase on Facebook
      </a>
    </div>
  );
};

export default CarCard;
