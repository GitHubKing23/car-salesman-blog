import React from 'react';
import { Helmet } from 'react-helmet';
import JeffPhoto from '../assets/jeff.jpg'; // ensure you add a photo in src/assets/

const testimonials = [
  {
    name: 'Sarah L.',
    quote: 'Jeff helped me find the perfect car under my budget. His expertise made the process seamless!',
  },
  {
    name: 'Mark T.',
    quote: 'Thanks to Jeff's honest reviews, I felt confident in my purchase. Highly recommend his insights!',
  },
];

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <Helmet>
        <title>About Jeff - Jeff's Car Blog</title>
        <meta name="description" content="Learn more about Jeff, the automotive expert behind Jeff's Car Blog, and his passion for cars." />
      </Helmet>

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <img
          src={JeffPhoto}
          alt="Jeff smiling beside a car"
          className="w-32 h-32 rounded-full shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold">About Jeff</h1>
        <p className="mt-2 text-gray-600">
          Professional car salesman &amp; enthusiast with over a decade in the automotive industry.
        </p>
      </div>

      {/* Background Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">My Journey</h2>
        <p className="text-gray-700 leading-relaxed">
          I started my career in 2010 as a junior salesman at City Motors, where I discovered my passion for matching people with their ideal vehicles. Over the years, I've worked with various makes and models, helping hundreds of customers drive away satisfied.
        </p>
      </section>

      {/* Expertise Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">What I Offer</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>In-depth car reviews &amp; buying guides</li>
          <li>Transparent pricing and negotiation tips</li>
          <li>Personalized pre-approval and financing advice</li>
          <li>One-on-one consultation for your next purchase</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="border-l-4 border-blue-500 pl-4 italic">
              "{t.quote}"
              <footer className="mt-1 text-sm text-gray-600">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Ready to Find Your Dream Car?</h2>
        <p className="text-gray-700 mb-4">
          Whether you’re browsing blogs, exploring listings, or ready to get pre-approved, I’m here to help every step of the way.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
