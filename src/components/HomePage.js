// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Jeff'sCarBlog - Your Trusted Automotive Guide</title>
        <meta name="description" content="Discover the latest in car insights, reviews, and tips. Explore the power of RAM with Jeff'sCarBlog." />
        <meta name="keywords" content="Jeff'sCarBlog, car blog, automotive reviews, car buying tips, RAM trucks, subprime car loans" />
        <meta property="og:title" content="Jeff'sCarBlog - Discover the Power of RAM" />
        <meta property="og:description" content="Learn about the latest RAM models for power, durability, and performance. Schedule a test drive now!" />
        <meta property="og:image" content="/ram.png" />
        <meta property="og:url" content="https://yourdomain.com" />
      </Helmet>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Jeff'sCarBlog</h1>
          <p>Your trusted guide for car insights, reviews, and advice.</p>
          <Link to="/about" className="cta-button">Learn More</Link>
        </div>
      </section>

      <section className="ram-info">
        <img src="/ram.png" alt="RAM Truck" className="ram-image" />
        <div className="ram-text">
          <h2>Discover the Power of RAM</h2>
          <p>Experience the strength, durability, and performance of the latest RAM models. Perfect for all your heavy-duty needs and adventures.</p>
          <Link to="/schedule" className="booking-button">Book a Test Drive</Link>
        </div>
      </section>

      {/* Ebook Download Section */}
      <section className="ebook-download">
        <h2>Free Ebook: Understanding Car Loans for Subprime Buyers</h2>
        <p>
          Are you a subprime borrower looking to improve your credit and explore car financing options? Download our free ebook for tips on enhancing your credit score and making informed car-buying decisions.
        </p>
        <a href="/Subprime_Borrower_Guide_Personalized.pdf" download className="download-button">
          Download Now
        </a>
      </section>

      <footer>
        <p>&copy; 2024 Jeff'sCarBlog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
