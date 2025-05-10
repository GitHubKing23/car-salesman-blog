// src/components/SinglePost.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import blogPosts from '../blogData';
import './SinglePost.css';

const SinglePost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post._id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="single-post">
      <Helmet>
        <title>{post.title} - Jeff'sCarBlog</title>
        <meta name="description" content={post.content.slice(0, 150)} />
        <meta name="keywords" content="car review, automotive tips, Jeff'sCarBlog" />
        <meta property="og:title" content={`${post.title} - Jeff'sCarBlog`} />
        <meta property="og:description" content={post.content.slice(0, 150)} />
        <meta property="og:image" content="link-to-post-image.jpg" />
        <meta property="og:url" content={`https://yourdomain.com/post/${post._id}`} />
      </Helmet>

      <h1>{post.title}</h1>

      {post.content.split('\n').map((paragraph, index) => (
        <p key={index}>
          {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
            <strong>{paragraph.slice(2, -2)}</strong>
          ) : (
            paragraph
          )}
        </p>
      ))}

      <div className="cta">
        Ready to take the next step? Schedule an appointment with me using the 
        <a href="/schedule"> appointment form</a> or 
        <a href="/schedule"> click here to book now</a>.
      </div>
    </div>
  );
};

export default SinglePost;
