// src/components/AboutPage.js
import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Jeff - Jeff'sCarBlog</title>
        <meta name="description" content="Learn more about Jeff, the automotive expert behind Jeff'sCarBlog, and his passion for cars." />
      </Helmet>
      <h1>About Jeff</h1>
      <p>
        Hi, I'm Jeff, a professional car salesman with years of experience in the automotive industry. My mission is to help customers make informed car-buying decisions through expert tips and reviews.
      </p>
    </div>
  );
};

export default AboutPage;
