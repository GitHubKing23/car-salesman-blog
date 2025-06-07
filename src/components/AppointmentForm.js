import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    appointment: '',
    autoBook: false
  });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Construct payload
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      autoBook: formData.autoBook,
      appointment: formData.autoBook ? undefined : formData.appointment
    };

    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/forms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');

      setSuccess(true);
      setMessage('Your appointment request has been received!');
      setFormData({ name: '', email: '', phone: '', city: '', appointment: '', autoBook: false });
    } catch (err) {
      console.error('Form submission error:', err);
      setSuccess(false);
      setMessage(err.message || 'Error scheduling appointment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="appointment-form">
      <h2>Schedule an Appointment</h2>
      {success ? (
        <div className="confirmation">
          <p>{message}</p>
          <button onClick={() => setSuccess(false)}>Book Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input name="city" type="text" placeholder="City" value={formData.city} onChange={handleChange} required />

          <label>
            <input name="autoBook" type="checkbox" checked={formData.autoBook} onChange={handleChange} />
            Automatically schedule next available slot
          </label>

          {!formData.autoBook && (
            <input
              name="appointment"
              type="datetime-local"
              value={formData.appointment}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Book Appointment'}
          </button>
          {message && !success && <p className="error">{message}</p>}
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
