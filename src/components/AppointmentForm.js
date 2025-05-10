import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import { db } from '../firebase'; // Import the Firestore database instance from firebase.js
import './AppointmentForm.css'; // Import your CSS for styling

const AppointmentForm = () => {
  // State variables to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false); // New state for success confirmation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing

    const appointmentData = {
      name,
      email,
      date,
      time,
      createdAt: new Date(), // Add a timestamp
    };

    try {
      await addDoc(collection(db, 'appointments'), appointmentData);
      setMessage('Appointment scheduled successfully!');
      setSuccess(true); // Set success to true if the submission is successful
      
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setMessage('Error scheduling the appointment. Please try again.');
      setSuccess(false); // Set success to false if there is an error
    }
  };

  return (
    <div className="appointment-form">
      <h2>Schedule an Appointment</h2>
      {success ? ( // If the form submission is successful, show a confirmation message
        <div className="confirmation">
          <p>{message}</p>
          <button onClick={() => setSuccess(false)}>Schedule Another Appointment</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <button type="submit">Book Appointment</button>
        </form>
      )}
      {message && !success && <p>{message}</p>} {/* Display error message if any */}
    </div>
  );
};

export default AppointmentForm;
