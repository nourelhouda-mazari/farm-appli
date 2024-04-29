import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Message = ({ message }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  console.log(t("ID de l'utilisateur actuel :"), currentUser.uid);
  console.log(t("Message Sender ID:"), message.senderId);
  if (message.senderId === currentUser.uid) {
    console.log(t("This message belongs to the current user."));
  } else {
    console.log(t("This message does not belong to the current user."));
  }

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div className={`message ${message.senderId === currentUser.uid ? "owner" : ""}`} ref={ref}>
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className={`messageContent ${message.img ? "has-image" : ""}`}>
        {message.img && <img src={message.img} alt="" style={{width: '100px'}} />}
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
