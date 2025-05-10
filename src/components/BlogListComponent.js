import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../services/blogService'; // Update to named import

const BlogListComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs from the backend
    const fetchBlogPosts = async () => {
      try {
        const blogPosts = await fetchBlogs(); // Call fetchBlogs directly
        setBlogs(blogPosts); // Directly set response data
      } catch (error) {
        setError('Failed to load blogs. Please try again later.');
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-list-container">
      <h2>Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <Link to={`/post/${blog._id}`}>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt || blog.content.slice(0, 100) + '...'}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogListComponent;
