// src/components/CarListComponent.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import carService from '../services/carService';

export default function CarListComponent() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    carService.getCars()
      .then(res => setCars(res.data))
      .catch(err => setError('Failed to load cars.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading inventory…</p>;
  if (error)   return <p className="error">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h2 className="text-3xl font-bold">Available Cars</h2>
      {cars.length === 0
        ? <p>No cars in inventory.</p>
        : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cars.map(car => (
              <li key={car.stockNumber} className="border rounded p-4 shadow">
                <Link to={`/cars/${car.stockNumber}`}>
                  <h3 className="text-xl font-semibold">{car.year} {car.make} {car.model}</h3>
                  <p className="text-gray-600">${car.price.toLocaleString()}</p>
                  {car.pictures[0] && (
                    <img src={car.pictures[0].url} alt="" className="mt-2 w-full h-40 object-cover rounded" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
}
