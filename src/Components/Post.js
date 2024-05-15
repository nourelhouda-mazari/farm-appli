import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import axios from 'axios';

const Post = ({ post, setPosts, posts }) => {
  const { avatar, author, createdAt, description, link } = post;

  const deletee = (post) => {
    axios.delete(`http://localhost:3002/tuto/${post.id}`, {
      headers: {
        Authorization: localStorage['token'],
      },
    })
    .then(() => {
      setPosts(posts.filter((p) => p.id !== post.id));
    })
    .catch(error => console.error(error))
  }

  return (
    <Card className="mb-3" 
    style={{
      border:'solid 2px green'
    }}>
      <Card.Header style={{ width: '773px', display: 'flex', alignItems: 'center' }}>
       <img src={avatar} alt="Avatar" className="avatar mr-3" style={{marginRight:'10px', marginTop:'-1px', height:'50px', width:'50px'}} />
       <div>
         <h6 className="mb-0">{author.name || "Unknown"}</h6>
         <p className="text-muted mb-0">{new Date(createdAt).toLocaleString()}</p>
       </div>
      </Card.Header>

      <Card.Body>
        <Card.Text>{description}</Card.Text>
        {link && (
          <div className="mb-3">
            {/* Assuming media is either an image or video */}
            {link.includes('.mp4') ? (
              <video src={link} controls className="w-100" />
            ) : (
              <img src={link} alt="Post media" className="w-100" />
            )}
          </div>
        )}
        {/* Add more interactive features like comments, likes, etc. */}
        {/* For now, just a simple button for demonstration */}
        {author.uid !== auth.currentUser.uid ? <Link to={`/maain/${author.uid}`} style={{textDecoration:'none'}}>
        <Button 
        style={{
        display:'flex',
        justifyContent:'center',
        marginLeft:'255px',
        }}
        variant="success">Ask for more informations</Button> </Link>:
        <Button 
        style={{
        display:'flex',
        justifyContent:'center',
        marginLeft:'255px',
        }}
        onClick={()=> deletee(post)}
        variant="danger">Delete</Button>
        }
      </Card.Body>
    </Card>
  );
};


export default Post;
