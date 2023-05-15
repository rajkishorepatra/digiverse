import React from 'react'
import loaderImg from '../images/loader.gif';

const Loader = () => {
  return (
    <div className='loader-container'>
<div className="loader">
    <img src={loaderImg} alt="Loading..." />
  </div>
      
    </div>
  );
}

export default Loader;
