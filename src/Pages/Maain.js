import React, { useContext, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Chat from '../Components/Chat';
import '../Styles/Messagerie.css';
import Footer from '../Components/footer';
import Navigation from '../Components/Navigation';
import { useParams } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';

const Maain = () => {
  const params = useParams();
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    console.log(params);
    if(params.id) {
      console.log('chat with user id', params.id);
      dispatch({ type: "CHANGE_USER", payload: {uid: params.id} });

    }
  }, [params]);

  return (
    <div className='home'>
      <Navigation />
      <div className="container">
        <Sidebar />
        <Chat id={params.id}/>
      </div>
     
    </div>  
  );
}

export default Maain;
