import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Post = ({ post }) => {
  const { avatar, author, date, content, media } = post;

  return (
    <Card className="mb-3" 
    style={{
      border:'solid 2px green'
    }}>
      <Card.Header style={{ width: '773px', display: 'flex', alignItems: 'center' }}>
       <img src={avatar} alt="Avatar" className="avatar mr-3" style={{marginRight:'10px', marginTop:'-1px', height:'50px', width:'50px'}} />
       <div>
         <h6 className="mb-0">{author}</h6>
         <p className="text-muted mb-0">{date}</p>
       </div>
      </Card.Header>

      <Card.Body>
        <Card.Text>{content}</Card.Text>
        {media && (
          <div className="mb-3">
            {/* Assuming media is either an image or video */}
            {media.includes('.mp4') ? (
              <video src={media} controls className="w-100" />
            ) : (
              <img src={media} alt="Post media" className="w-100" />
            )}
          </div>
        )}
        {/* Add more interactive features like comments, likes, etc. */}
        {/* For now, just a simple button for demonstration */}
        <a href="mailto:nardjes.mzr@gmail.com" style={{textDecoration:'none'}}>
        <Button 
        style={{
        display:'flex',
        justifyContent:'center',
        marginLeft:'255px',
        }}
        variant="success">Ask for more informations</Button> </a>
      </Card.Body>
    </Card>
  );
};


export default Post;
