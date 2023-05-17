import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { db } from '../firebase.js';
import { NavLink } from 'react-router-dom';

const EditBlogPost = () => {
  const { id } = useParams(); // Get the blog ID from the URL parameter
  const history = useHistory();
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const doc = await db.collection('blogs').doc(id).get();
      if (doc.exists) {
        setBlog(doc.data());
        setTitle(doc.data().title);
        setContent(doc.data().content);
      } else {
        console.log('No such blog post!');
      }
    };

    fetchData();
  }, [id]);

  const handleSave = async () => {
    await db.collection('blogs').doc(id).update({
      title: title,
      content: content,
    });
    history.push(`/blog/${id}`);
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" edit container"> <br />
    <div className="edit-blog-post d-flex justify-content-center aligm-items-center flex-column ">
      <h1 className='text-white text-center'>Edit Blog Post</h1> <br /> <br />
      <h6 className='text-white'>Edit Title</h6>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> <br />
      <h6 className='text-white'>Edit Title</h6>
      <textarea
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
     
      <button className='btn btn-primary' onClick={handleSave}>Save Changes</button> <br />
      <NavLink className='btn  btn-outline-primary' to='/blogs'>Go Back</NavLink> <br />    
    </div>
    
    </div>
    
    
  );
};

export default EditBlogPost;
