import React from 'react';
import Navigation from '../Components/Navigation';

const NotAllowed = () => {
  return (
    <div className='home'>
    <Navigation />
    <div className="text-center mt-5">
      <h1>Access Denied</h1><br/>
      <p>Sorry, you are not allowed to access this page.</p>
    </div>
   
  </div>  


  );
};

export default NotAllowed;