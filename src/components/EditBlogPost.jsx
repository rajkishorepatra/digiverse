import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { db } from '../firebase.js';
import { NavLink } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'; // Import the CSS for the react-quill component
import ReactQuill from 'react-quill'; // Import the react-quill component

const EditBlogPost = () => {
  const { id } = useParams();
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
    <div className="edit container">
      <br />
      <div className="edit-blog-post d-flex justify-content-center aligm-items-center flex-column ">
        <h1 className='text-white text-center'>Edit Blog Post</h1> <br /> <br />
        <h6 className='text-white'>Edit Title</h6>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br />
        <h6 className='text-white'>Edit Content</h6>
        <ReactQuill className='text-white'
          value={content}
          onChange={setContent}
        />
        <br />

        <button className='btn btn-primary' onClick={handleSave}>Save Changes</button> <br />
        <NavLink className='btn  btn-outline-primary' to='/blogs'>Go Back</NavLink> <br />
      </div>
    </div>
  );
};

export default EditBlogPost;
