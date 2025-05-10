// src/App.js
import React from 'react';
import Header from './components/Header';
import BlogPage from './components/BlogPage';
import SinglePost from './components/SinglePost';
import AboutPage from './components/AboutPage';
import ScheduleAppointmentPage from './components/ScheduleAppointmentPage';
import HomePage from './components/HomePage';
import FormComponent from './components/FormComponent';
import BlogListComponent from './components/BlogListComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/main.css';
 
function App() {
  return (
    <Router>
      <div className="app-container">
        <Helmet>
          <title>Jeff'sCarBlog - Your Trusted Automotive Guide</title>
          <meta
            name="description"
            content="Jeff'sCarBlog offers expert advice, car reviews, and automotive tips to help you make informed car-buying decisions."
          />
          <meta
            name="keywords"
            content="Jeff'sCarBlog, car blog, automotive reviews, car buying tips"
          />
        </Helmet>

        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogListComponent />} /> {/* Updated Blog Route */}
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/schedule" element={<ScheduleAppointmentPage />} />
          <Route path="/pre-approval" element={<FormComponent />} /> {/* New Form Route */}
        </Routes>

        <footer>
          <p>&copy; 2024 Jeff'sCarBlog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
