import React from 'react';


const firebase_Messaging = ({ notification }) => {
    return (
      <>
        <div id="notificationHeader">
          {/* image is optional */}
          {notification.image && (
            <div id="imageContainer">
              <img src={notification.image} width={100} />
            </div>
          )}
          <span>{notification.title}</span>
        </div>
        <div id="notificationBody">{notification.body}</div>
      </>
    );
  };
  
  export default firebase_Messaging;