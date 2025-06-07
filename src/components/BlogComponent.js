// src/components/BlogListComponent.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogService from '../services/blogService';

const BlogListComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogService.getBlogs();
        setBlogs(response.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blog posts...</p>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blog posts available yet. Check back soon!</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog._id} className="border-b pb-4">
              <Link to={`/blogs/${blog.slug}`} className="group hover:underline">
                <h3 className="text-2xl font-semibold group-hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {blog.excerpt || blog.sections?.[0]?.body.slice(0, 120) + '...'}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogListComponent;