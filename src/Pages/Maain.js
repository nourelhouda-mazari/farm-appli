import React from 'react';
import Sidebar from '../Components/Sidebar';
import Chat from '../Components/Chat';
import '../Styles/Messagerie.css';
import Footer from '../Components/footer';
import Navigation from '../Components/Navigation';

const Maain = () => {
  return (
    <div className='home'>
      <Navigation />
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
     
    </div>  
  );
}

export default Maain;
