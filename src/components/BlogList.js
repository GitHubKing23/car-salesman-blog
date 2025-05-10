// src/components/BlogList.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './BlogList.css';

const BlogList = () => {
  const [posts] = useState([
    { _id: 1, title: '5 Tips for Buying Your First Car', snippet: 'Essential tips for first-time car buyers...' },
    { _id: 2, title: 'Electric Cars: Are They Worth the Investment?', snippet: 'Exploring the pros and cons of electric vehicles...' },
    { _id: 3, title: 'Top SUVs of 2024: What to Watch For', snippet: 'Highlighting the top SUVs for 2024...' },
    { _id: 4, title: '2022 RAM 1500 Classic SLT Express', snippet: 'Discover the powerful 2022 RAM 1500 Classic...' },
  ]);

  return (
    <div className="blog-list">
      <Helmet>
        <title>Blog - Jeff'sCarBlog</title>
        <meta name="description" content="Jeff'sCarBlog offers insights, tips, and advice for car buyers. Read our latest posts on car buying tips, electric cars, top SUVs, and more!" />
        <meta name="keywords" content="car blog, automotive tips, car buying advice, Jeff'sCarBlog" />
      </Helmet>
      {posts.map(post => (
        <div key={post._id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.snippet}</p>
          <a href={`/post/${post._id}`} className="read-more-link">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
