import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import LoginComponent from "./Login";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Offline from '../Pages/Offline';
import PasswordStrengthBar from 'react-password-strength-bar';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const professions = {
  Consommateur: "Consommateur",
  Commercant: "Commercant",
  Agriculteur: "Agriculteur",
  Agriculteuringenieur: "Agriculteur ingenieur"
};

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState({ profession: "", proof: null });
  const navigate = useNavigate();

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [profession, setProfession] = useState("");
  const [justificatif, setJustificatif] = useState(null);
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleModalButtonClick = () => {
    setSelectedProfession(profession);
    setSelectedFile(justificatif);
    handleCloseModal();
  };

  const handleCloseModal = () => setShowModal(false);
  
  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleJustificatifChange = (e) => {
    setJustificatif(e.target.files[0]);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
  
    signInWithPopup(auth, provider)
      .then(async (result) => {
        setShowModal(true);
  
        const user = result.user;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const { profession } = userDetails;
        const document = userDetails.proof; 

        setUserDetails({
          ...userDetails,
          displayName,
          email,
          photoURL,
        });
  
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName,
          email,
          photoURL,
          profession, 
          documentURL: photoURL, 
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion avec Google", error);
      });
  };
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profession" || name === "proof") {
      setUserDetails((prevState) => ({
        ...prevState,
        [name]: name === "proof" ? files[0] : value,
      }));
    } else {
      setUserDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      await sendEmailVerification(auth.currentUser);
  
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
  
      await uploadBytesResumable(storageRef, userDetails.proof).then(async () => {
        const downloadURL = await getDownloadURL(storageRef);
  
        try {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
            profession: userDetails.profession,
            documentURL: downloadURL, 
          });
  
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
            profession: userDetails.profession, 
            documentURL: downloadURL,
          });
  
          await setDoc(doc(db, "userChats", res.user.uid), {});
  
          navigate("/");
  
          setShowLoginForm(true);
        } catch (err) {
          console.error(err);
          setErr(true);
          setLoading(false);
        }
      });
    } catch (err) {
      console.error(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Compléter votre profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="profession">
            <Form.Label>Profession</Form.Label>
            <Form.Select name="profession" value={profession} onChange={handleProfessionChange}>
              <option value="">Sélectionnez une profession</option>
              {Object.entries(professions).map(([key, value]) => {
                return (
                  <option key={key} value={key}>
                    {value}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          {profession && profession !== "Consommateur" && (
            <Form.Group controlId="justificatif">
              <Form.Label>Justificatif (fichier)</Form.Label>
              <Form.Control type="file" onChange={handleJustificatifChange} />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
          <Link to="/SettingsPage">
            <Button variant="primary" onClick={handleModalButtonClick}>
              Accéder aux paramètres
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      {!isOnline && <Offline />} 
      {showLoginForm ? (
        <LoginComponent />
      ) : (
        <div className="formWrapper" style={{ marginTop: '-70px'}}>
          <span className="logo">Commencez maintenant</span>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Nom affiché"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordStrengthBar password={password} />
            <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProfession">
              <Form.Label>Profession</Form.Label>
              <Form.Select name="profession" value={userDetails.profession} onChange={handleChange} className="custom-input">
                <option value="">Sélectionnez une profession</option>
                <option value="commerçant">Commerçant</option>
                <option value="consommateur">Consommateur</option>
                <option value="ingénieur_agriculteur">Ingénieur Agricole</option>
                <option value="agriculteur">Agriculteur</option>
              </Form.Select>
            </Form.Group>
            {userDetails.profession === 'commerçant' ||
              userDetails.profession === 'ingénieur_agriculteur' ||
              userDetails.profession === 'agriculteur' ? (
              <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProof">
                <Form.Label>Justificatif (carte d'agriculteur, diplome d'ingenieur, registre de commerce)</Form.Label>
                <Form.Control
                  required
                  type="file"
                  name="proof"
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Group>
            ) : null}
            <input
              required
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            <Row>
              <Col>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Ajouter un avatar</span>
                </label>
              </Col>
              <Col>
                <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <img src={GoogleSignin} alt="Se connecter avec Google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
                </button>
              </Col>
            </Row>
            <button disabled={loading}>S'inscrire</button>
            {loading && "Téléchargement et compression de l'image en cours, veuillez patienter..."}
            {err && <span>Quelque chose s'est mal passé</span>}
          </form>
          <p>
            Vous avez déjà un compte ?{" "}
            <button onClick={() => setShowLoginForm(true)} style={{border: 'none', backgroundColor: 'transparent', color: 'red', fontWeight: 'bold', fontSize: '15px'}}>Se connecter</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;