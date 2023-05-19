import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase.js';
import { NavLink } from 'react-router-dom';

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
    <>
  
    <div className="d-flex align-items-center justify-content-center flex-column my-5">
      <div className="blog-post d-flex align-items-center justify-content-center flex-column my-5">
        <img src={blog.image} alt="Blog Post Image" className='mb-3' />
      <h2 className='text-primary'><strong>{blog.title}</strong></h2>
      <p className='text-light blogpara' dangerouslySetInnerHTML={{ __html: blog.content }}></p>

      <p className='author' >Author: {blog.author}</p>
      </div>
      <NavLink className='btn btn-outline-primary gobackbtn' to='/blogs'>Go Back</NavLink>
    </div>
    </>
  ); 
};

export default BlogPost;
