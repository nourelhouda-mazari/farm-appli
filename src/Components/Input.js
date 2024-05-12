import React, { useContext, useState, useRef, useEffect } from "react";
import Img from "../Images/img.png";
import Attach from "../Images/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  addDoc,
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage, messaging, auth } from "../firebase/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';



const Input = ({ recaiver }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }; 

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [imageSelected, setImageSelected] = useState(false);

  const { currentUser } = auth;
  const { data } = useContext(ChatContext);

  const messagesEndRef = useRef(null);



  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileSelected(true);
  };

  const handleImageChange = (event) => { 
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setImageSelected(true);
  };

  const handleSend = async () => {
    if (true) {
      if (text.trim() !== "" || file || image) {
        const messageData = {
          id: uuid(),
          text: text.trim(),
          senderId: currentUser.uid,
          date: Timestamp.now(),
        };
  
        if (file) {
          const fileRef = ref(storage, `files/${file.name}`);
          await uploadBytesResumable(fileRef, file);
          const downloadURL = await getDownloadURL(fileRef);
          messageData.fileURL = downloadURL;
        }
  
        if (image) {
          const imageRef = ref(storage, `images/${image.name}`);
          await uploadBytesResumable(imageRef, image);
          const downloadURL = await getDownloadURL(imageRef);
          messageData.imageURL = downloadURL;
        }

        // const chatRoomId = `${user.uid}_${recipientId}`;
        // firebase.database().ref(`chatRooms/${chatRoomId}`).push({
        //   userId: user.uid,
        //   message: message,
        //   timestamp: firebase.database.ServerValue.TIMESTAMP
        // });
  
        let chat = await getDoc(doc(db, "chats", data.chatId));
        console.log(chat.exists(), recaiver, data.chatId);
        if(!chat.exists()) {
          let user = await getDoc(doc(db, "users", recaiver));
          console.log(user.exists() === true, user.data());
          if(!user.exists()) {
            console.error(t("User not found"));
            return;
          }
          await setDoc(doc(db, "chats", data.chatId), {
            users: [currentUser.uid, recaiver],
            messages: [messageData],
            createdAt: serverTimestamp(),
          });
          await setDoc(doc(db, "userChats", currentUser.uid), {
            [recaiver]: {
              chatId: data.chatId,
              userInfo: {
                displayName: user.data()?.displayName || "",
                uid: recaiver,
                photoURL: user.data()?.photoURL || "",
              },
              date: serverTimestamp(),
            },
          }, { merge: true });
          await setDoc(doc(db, "userChats", recaiver), {
            [currentUser.uid]: {
              chatId: data.chatId,
              userInfo: {
                displayName: currentUser.displayName,
                photoURL: "",
              },
              date: serverTimestamp(),
            },
          }, { merge: true });

        } else {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion(messageData),
          });
        }
  
        setText("");
        setFile(null);
        setImage(null);
        setFileSelected(false);
        setImageSelected(false);
      }
    } else {
      console.error(t("chatId is not available"));
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data.messages]);

  return (
    <div className="input">
      <input
        type="text"
        placeholder={t("Write...")}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyUp}
        value={text}
      />
      <div className={`send ${fileSelected ? 'file-selected' : ''} ${imageSelected ? 'image-selected' : ''}`}>
        <label htmlFor="fileInput">
          <img src={Attach} alt={t("Attach")} />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="imageInput">
          <img src={Img} alt="Image" />
        </label>
        <input
          type="file"
          id="imageInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <button onClick={handleSend}>{t("Submit")}</button>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Input;
