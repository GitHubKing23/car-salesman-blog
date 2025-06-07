// src/components/CarDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import carService from '../services/carService';

export default function CarDetailPage() {
  const { stockNumber } = useParams();
  const [car, setCar]   = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    carService.getCar(stockNumber)
      .then(res => setCar(res.data))
      .catch(() => setError('Car not found.'));
  }, [stockNumber]);

  if (error) return <p className="error">{error}</p>;
  if (!car)  return <p>Loading car details…</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <Link to="/cars" className="text-blue-600 hover:underline">← Back to Inventory</Link>
      <h2 className="text-3xl font-bold">{car.year} {car.make} {car.model}</h2>
      <p className="text-gray-600">Stock#: {car.stockNumber}</p>
      <p className="text-xl font-semibold">${car.price.toLocaleString()}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {car.pictures.map((pic, i) => (
          <img key={i} src={pic.url} alt={pic.caption || ''} className="w-full h-48 object-cover rounded" />
        ))}
      </div>
      <p>{car.description}</p>
      <p><strong>Mileage:</strong> {car.mileage?.toLocaleString()}</p>
      <p><strong>Color:</strong> {car.color}</p>
    </div>
  );
}
