import React, { useState, useEffect,useRef } from 'react';
import {useHistory } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase.js';
import { format } from 'date-fns';
import ReactQuill from 'react-quill'; // Import the react-quill component
import 'react-quill/dist/quill.snow.css'; // Import the CSS for the react-quill component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Blogs = () => {
  const history = useHistory();

  const { isAuthenticated, user } = useAuth0(); // Use Auth0's user object
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]); // State variable for list of blog posts
  const [blogContent, setBlogContent] = useState(''); // State variable for the blog content
  const blogContentRef = useRef(null);


  //   setShowDeleteAlert(!showDeleteAlert);
  // };
  const [selectedPostId, setSelectedPostId] = useState(null); // State variable for the selected blog post to delete
  const handleDeleteAlert = (id) => {
    // Set the selected post ID to show or hide the delete alert
    setSelectedPostId(id === selectedPostId ? null : id);
  };


  const handleDeletePost = async (id) => {
    // Perform the deletion operation here
    await db.collection('blogs').doc(id).delete();
    // Additional logic after deletion if needed
    handleDeleteAlert(null); // Close the modal
    toast.success('Blog deleted successfully!');
  };  


  // Fetch blog posts from Firestore on component mount
  useEffect(() => {
    const unsubscribe = db.collection('blogs').onSnapshot((snapshot) => {
      const newBlogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(newBlogs);
    });
    return unsubscribe;
  }, []);
  const handleEditPost = (id) => {
    history.push(`/edit-blog/${id}`);
  };
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleContentChange = (content) => {
    setBlogContent(content); // Update the blog content state variable
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const blogTitle = form.blogTitle.value;
    const blogContent = blogContentRef.current.editor.root.innerHTML; // Updated line
    const blogImage = form.blogImage.files[0];
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`blogImages/${blogImage.name}`);
    await imageRef.put(blogImage);
    const downloadURL = await imageRef.getDownloadURL();
    const blogRef = db.collection('blogs').doc();
    await blogRef.set({
      title: blogTitle,
      content: blogContent,
      image: downloadURL,
      createdAt: new Date(),
      author: 'Digiverse360 (admin)',
    });
    setShowModal(false);
    toast.success('Blog posted successfully!');
  };

  return (
    <>
     <ToastContainer position="top-center" />
      <section id="header" className="d-flex aligm-items-center my-5 ">
        <div className="container-fluid my-5">
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <div className="row">
                  <h1 className="mainheader text-center">
                    Blogs-
                    <strong className="brand-name"> DigiVerse360</strong>
                  </h1>
                  <div className='d-flex align-items-center justify-content-center' >
                  <hr style={{width:'30%',height:'5px',color:'white'}}/>
                  </div>
                  <p className="subheader my-3 text-center ">
                  Discover the latest insights and trends in digital marketing. 
                  Find informative and engaging articles which cover a wide range of topics, including SEO, 
                  social media, content marketing, and more. Stay up to date and enhance your digital
                   marketing knowledge.
                  </p>
                  {isAuthenticated && (
                    <div className='d-flex aligm-items-center justify-content-center' >
                    <Button className='createbtn' variant="primary" style={{width:'20%'}} onClick={handleShow}>
                      Create Blog
                    </Button>
                    </div>
                  )}
                  
                  </div>
                  {/* <NavLink to="/" className="btn btn-outline-primary mb-5">
                    <strong> Back to Home </strong>
                  </NavLink> */}
                {/* <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    style={{ scale: '0.8' }}
                    src={blog}
                    className="image-fluid animated"
                    alt="homeimg"
                  />
                </div> */}
              </div>
            </div>
          </div>
      
      </section>
      <Modal style={{scale:'0.9', marginTop:'6rem',borderRadius:'20px'}}
      show={showModal}
       onHide={handleClose}
       dialogClassName='modal-dialog-centered modal-fullscreen'
       >
        <Modal.Header closeButton>
          <Modal.Title>Create Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId="blogTitle">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" name="blogTitle" required />
            </Form.Group> <br />
            <Form.Group controlId="blogContent">
              <Form.Label>Blog Content/Paragraph</Form.Label>
              <ReactQuill // Replace the textarea with ReactQuill
                ref={blogContentRef}
                value={blogContent}
                onChange={handleContentChange}
              />
            </Form.Group>
            <Form.Group controlId="blogImage">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" required name="blogImage" className="mb-3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Render Blog */}
      {selectedPostId && (
        <Modal style={{marginTop:'10em'}} show={selectedPostId !== null} onHide={() => handleDeleteAlert(null)}>
        <Modal.Body>
          <p>Are you sure you want to delete this post?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDeletePost(selectedPostId)}>
            Yes, Delete
          </Button>
          <Button variant="secondary" onClick={() => handleDeleteAlert(null)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      )}

      <section id="blogs">
  <div className="container-fluid my-5">
    <div className="row">
      {blogs.map((blog) => (
        <div key={blog.id} className="col-md-4">
          <div className="card blogcard">
            <img className="card-img-top" src={blog.image} alt={blog.title} />
            <div className="card-body">
              <h5 className="card-title text-primary "><strong>{blog.title}</strong></h5>
              <p className="card-text blogcardpara " dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + '...' }}></p>
              <p className="card-text">
                <small className="text-white">Author: {blog.author}</small> <br />
                <small className='text-white'>Time Posted:  {format(blog.createdAt.toDate(), 'yyyy-MM-dd HH:mm')} IST</small>
              </p>
              <NavLink to={`/blog/${blog.id}`} type="button" className="btn btn-lg btn-block btn-primary readmore "> Read More </NavLink>
              {isAuthenticated && (
                <>
                <button className='btn btn-sm editbtn btn-primary mx-3 ' onClick={() => handleEditPost(blog.id)}>Edit Post</button>
                <button
                          onClick={()=>handleDeleteAlert(blog.id)}
                          className="btn btn-sm deletebtn btn-danger">
                          Delete Post
                        </button>
                        </>
              )} 

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </>
  );
};

export default Blogs;