import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { db } from '../firebase.js';

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
    <div className="edit-blog-post">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditBlogPost;
