import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BasicExample from '../Components/Navigation';
import Login from '../Pages/Login';
import farmers from '../Images/farmrs-removebg-preview.png';
import '../Styles/Home.css';
import Video from '../img/vid.mp4'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };


  const [isPlaying, setIsPlaying] = useState(false); // State to control video playback

  useEffect(() => {
    const videoElement = document.getElementById('backgroundVideo');

    if (videoElement) {
      videoElement.addEventListener('ended', () => videoElement.play()); // Loop playback
      setIsPlaying(true); // Set initial playing state
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', () => videoElement.play());
      }
    }; // Cleanup on unmount
  }, []); // Empty dependency array for one-time effect

  const handlePlayPause = () => {
    const videoElement = document.getElementById('backgroundVideo');
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="Home">
      <Row className="nav-home">
        <BasicExample />
      </Row>
      <div className="video-container" style={{ position: 'relative' }}>
        <video
          id="backgroundVideo"
          src={Video}
          autoPlay={isPlaying} // Control playback with state
          muted // Mute the video by default (optional)
          loop
          style={{
            position: 'fixed',
            right: 0,
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            objectFit: 'cover', 
            zIndex: -1, 
            filter: 'brightness(0.6)',

           }}
        />
        <Row style={{ position: 'relative', zIndex: 1 }}>
        <Col md={4} className='forms-container' >
            <Login />
          </Col>
          <Col className="farmconnect-hero">
              <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>FarmConnect</h2>

              <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>

             {t("hello**FarmConnect** connects farmers, consumers, and sellers within a dynamic agricultural community. Find fresh products, resources, and a support network")}
              </p>
            </Col>



        </Row>
      </div>
    </div>
  );
}

export default Home;
