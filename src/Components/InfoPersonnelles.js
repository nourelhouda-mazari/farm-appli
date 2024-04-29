import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; 
import { AuthContext } from "../context/AuthContext"; 
import { Form, FloatingLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function InfoPersonnelles() {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext); 
  const currentUser = authContext.currentUser; 

  const [userInformation, setUserInformation] = useState({
    displayName: "",
    email: "",
    profession: "",
    photoURL: "",
    documentURL: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (currentUser) { 
          const userDoc = await getDoc(doc(db, "users", currentUser.uid)); 
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserInformation({
              displayName: userData.displayName || "",
              email: userData.email || "",
              profession: userData.profession || "",
              photoURL: userData.photoURL || "",
              documentURL: userData.documentURL || ""
            });
          } else {
            console.log(t("No user data found"));
          }
        }
      } catch (error) {
        console.error(t("Error retrieving user data :"), error);
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
      padding: '2em',
      color: '#fff',
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#1b1b1b',
    }}>   
      <h3 style={{margin: '5%', textAlign: 'center'}}> {t("Personal informations")}</h3>
      <Form style={{margin: '2%', width:'80%', fontWeight: 'bold'}}>
        <FloatingLabel controlId="displayName" label={t("username")} className="mb-3" >
          <Form.Control type="text" value={userInformation.displayName} readOnly style={{ backgroundColor: '#ccc'}} />
        </FloatingLabel>
        
        <FloatingLabel controlId="email" label={t("email")} className="mb-3">
          <Form.Control type="email" value={userInformation.email} readOnly style={{ backgroundColor: '#ccc'}} />
        </FloatingLabel>
        
        <FloatingLabel controlId="profession" label={t("profession")} className="mb-3">
          <Form.Control type="text" value={userInformation.profession} readOnly style={{ backgroundColor: '#ccc'}} />
        </FloatingLabel>
        
        <FloatingLabel controlId="photoURL" label={t("picture URL")} className="mb-3">
          <Form.Control type="text" value={userInformation.photoURL} readOnly style={{ backgroundColor: '#ccc'}}/>
        </FloatingLabel>
        
        <FloatingLabel controlId="documentURL" label={t("URL of the document" )}className="mb-3">
          <Form.Control type="text" value={userInformation.documentURL} readOnly style={{ backgroundColor: '#ccc'}}/>
        </FloatingLabel>
      </Form>
    </div>
  );
}

export default InfoPersonnelles;
