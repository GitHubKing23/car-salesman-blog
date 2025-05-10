import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const blogPosts = [
  {
    _id: 1,
    title: '5 Tips for Buying Your First Car',
    date: 'October 15, 2024',
    content: 'Buying your first car can be exciting but also overwhelming. In this post, we’ll walk you through five essential tips to help you choose the right vehicle, including budgeting, researching models, understanding financing options, and inspecting cars before purchase...',
  },
  {
    _id: 2,
    title: 'Electric Cars: Are They Worth the Investment?',
    date: 'October 20, 2024',
    content: 'Electric cars are becoming increasingly popular, but are they really worth the investment? This article explores the pros and cons of electric vehicles, including cost, maintenance, environmental impact, and the long-term value they offer. Whether you’re considering going green or sticking with a traditional car, this guide will help you make an informed decision...',
  },
  {
    _id: 3,
    title: 'Top SUVs of 2024: What to Watch For',
    date: 'October 25, 2024',
    content: 'SUVs remain a popular choice for families and adventurers alike. In this post, we’ll review the top SUVs of 2024, covering their features, safety ratings, and why they stand out in a crowded market. Whether you need something for off-roading or a reliable family vehicle, our guide has you covered...',
  },
  // Add more posts as needed
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post._id} className="blog-post">
          <h2>{post.title}</h2>
          <p><em>{post.date}</em></p>
          <p>{post.content.slice(0, 200)}...</p>
          <Link to={`/post/${post._id}`} className="read-more-link">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
