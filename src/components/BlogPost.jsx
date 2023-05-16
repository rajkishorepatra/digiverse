import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase.js';

const BlogPost = () => {
  const { id } = useParams(); // Get the blog ID from the URL parameter
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const doc = await db.collection('blogs').doc(id).get();
      if (doc.exists) {
        setBlog(doc.data());
      } else {
        console.log('No such blog post!');
      }
    };

    fetchData();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
        <img src={blog.image} alt="Blog Post Image" />
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>Author: {blog.author}</p>
    </div>
  );
};

export default BlogPost;
