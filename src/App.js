
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.js';
import './i18n.js';
import Products from './Pages/products.js';
import { toast } from 'react-toastify';
import Message from './Components/firebase_Messaging.js';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { messaging } from './firebase/firebase.js';
import Panier from './Components/Panier';
//import Admin from './App.js';
import Equipements from './Components/Equipements';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home';
import Account from './Pages/Account.js';
import Maain from './Pages/Maain';
import Workforce from './Pages/workforce';
import TermsAndConditions from './Components/Termes.js'; // Import your TermsAndConditions component
//import sections from './Dashboard/routes/sections.jsx';
import Feed from './Pages/Feed.js';
import Ajout from './Components/AjoutP.js';

import ContactUs from './Components/ContactUs';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


async function requestPermission() {
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    const token = await getToken(messaging, {
      vapidKey: 'BErmFXdtXxyIDJhBRLw_vQSUGSkH4YS9RJZWLmI67qI_GhEFXq0Bs-3mVzeTTN8yVkCQyM9vLhZ5F-x7M-nbzb4',
    });

    // We can send token to server
  } else if (permission === 'denied') {
    // notifications are blocked
    alert('You denied for the notification');
  }
}

function App() {
  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    toast(<Message notification={payload.notification} />);
  });

  getToken(messaging, {
    vapidKey: 'BErmFXdtXxyIDJhBRLw_vQSUGSkH4YS9RJZWLmI67qI_GhEFXq0Bs-3mVzeTTN8yVkCQyM9vLhZ5F-x7M-nbzb4',
  });

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Home" />;
    }
    return children;
  };

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Maain" element={<Maain />} />
          <Route path="/Maain/:id" element={<Maain />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/termes" element={<TermsAndConditions />} />
          <Route path="/Equipements" element={<Equipements />} />
          <Route path="/sections" element={<sections />} />
          <Route path="/workforce" element={<Workforce />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path="/contactus" element={<ContactUs />} /> 
          <Route path="/Ajouter" element={<Ajout />} />

        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
