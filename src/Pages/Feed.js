
import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button, Placeholder } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Post from '../Components/Post';
import téléchargement from '../Components/tuto1.jpg';
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer'; // Make sure the path is correct
import avatar from '../Components/avatar.png';
import avatar1 from '../Components/avatar2.png';
import tuto from '../Components/tuto1.mp4';
import avatar2 from '../Components/avatar1.jpg';
import tuto1 from '../Components/tuto2.jpg'
import axios from 'axios';

function Feed() {
  const [hoveringButton, setHoveringButton] = useState(null);
  const { t } = useTranslation();
  const [hoveringButtonDirect, setHoveringButtonDirect] = useState(false);
  const [hoveringButtonPoster, setHoveringButtonPoster] = useState(false);

  const handleMouseEnterDirect = () => {
    setHoveringButtonDirect(true);
  };

  const handleMouseLeaveDirect = () => {
    setHoveringButtonDirect(false);
  };

  const handleMouseEnterPoster = () => {
    setHoveringButtonPoster(true);
  };

  const handleMouseLeavePoster = () => {
    setHoveringButtonPoster(false); };

  // Dummy data for posts (you can replace it with actual data from a database)
  const [posts, setPosts] = useState([/*
    
    {
      id: 1,
      avatar: avatar,
      author: 'John Doe',
      date: 'April 19, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      media: téléchargement, // Assuming téléchargement is the correct path to the image
    },
    {
      id: 2,
      avatar: avatar1,
      author: 'Amr korso',
      date: '23 Avril 2024',
      content: 'Un tuto pour bien arroser des fleurs',
      media: tuto, // Assuming téléchargement is the correct path to the image
    },
    {
      id: 3,
      avatar:avatar2,
      author: 'John Doe',
      date: '22 Mars 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      media: tuto1,
    },
    // Add more posts as needed
  */]);

    const [content, setContent] = useState('');
    const [media, setMedia] = useState(null);

    useEffect(() => {
      const fetchPosts = async () => {
        axios.get('http://localhost:3002/tuto', {
          headers: {
            Authorization: localStorage['token'],
          },
        })
        .then((response) => {
          if(response.data) setPosts(Object.values(response.data)?.map((post) => ({...post, avatar})));
          else setPosts([]);
        }
        )
        .catch(error => console.error(error))

      };
      fetchPosts();
    }, []);
  
    const handleContentChange = (event) => {
      setContent(event.target.value);
    };
  
    const handleMediaChange = (event) => {
      const file = event.target.files[0];
      setMedia(file);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('description', content);
      formData.append('media', media);

      axios.post('http://localhost:3002/tuto/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage['token'],
        },
      })
      .then((response) => {
        setPosts([{
          author: {
            name: 'John Doe',
          },
          createdAt: new Date().getTime(),
          description: content,
          link: URL.createObjectURL(media),
          avatar,
          id: Math.random(),
        }, ...posts]);
      })
      .catch(error => console.error(error))


      setContent('');
      setMedia(null);
    };
  

  return (
    <div className="Feed">
      <Row className="nav-Feed">
        <Navigation />
      </Row>

<div className="something"
   style={{marginLeft:'443px', marginBottom:'30px', marginTop:'30px', width:'775px', borderRadius:'4px', border:'solid 2px green'}}>
  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
  <input
    className="somethingElse"
    style={{width:'720px', marginBottom:'20px', marginTop:'30px', height:'50px', marginLeft:'30px',borderRadius:'4px', border:'solid 2px green', background:'#d3f8d3'}}
    placeholder="  Nouvelle astuce ?"
    aria-label="Créer une publication"
    onChange={handleContentChange}
    type="text"
  />
  <div className="buttons" 
  style={{marginLeft:'400px', marginBottom:'15px'}}>
    <button onClick={() => document.getElementById('direct').click()}
     style={{
      ...(hoveringButtonDirect ? Styles.buttonHover : Styles.Button),
    }}
    onMouseEnter={handleMouseEnterDirect}
    onMouseLeave={handleMouseLeaveDirect}
      >
      <span>Photo/Video</span>
      <input type="file" id="direct" style={{ display: 'none' }} onChange={handleMediaChange} />
    </button>
    
    <button onClick={handleSubmit}
    type='submit'
     style={{
       ...(hoveringButtonPoster ? Styles.buttonHover : Styles.Button),
     }}
     onMouseEnter={handleMouseEnterPoster}
     onMouseLeave={handleMouseLeavePoster}
      >
      <span>Publier</span>
    </button>
  </div>
</div>
      
      
      <Row style={{ ...Styles.postcontainer, margin: '0 auto', maxWidth: '1200px', marginLeft: '430px'}}>
        <Col md={8} className="feed-container">
          {/* Iterate over posts array and render each post */}
          {posts?.sort((a, b)=> b.createdAt - a.createdAt).map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

const Styles = {
  Direct: {
    marginRight:'100px'
  },

  buttons: {
    marginBottom:'70px',
    marginTop:'3px'
    
  },

  postcontainer: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  Button: {
    marginRight:'20px',
    borderRadius:'8px',
    border:'none',
    background:'#5bb35b',
    color:'white',
    width:'160px',
    height:'35px',
  },
  newPost: {
    width: '780px',
    padding: '10px',
    border: '5px solid lightgreen',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '50px',
  },
  buttonHover: {
    marginRight:'20px',
    borderRadius:'8px',
    border:'none',
    backgroundColor: '#285728',
    color: '#ffffff',
    width:'160px',
    height:'35px',
  },

  
};

export default Feed;
