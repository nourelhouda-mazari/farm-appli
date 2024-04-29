import React from 'react';
import { app, auth } from '../firebase'; // Importez l'initialisation de Firebase
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log(t("Successful logout"));
    }).catch((error) => {
      console.log(t("Error when logging out :"), error);
    });
  };

  return (
    <div className='navbar'>
      <span className="logo">FarmConnect</span>
      <div className="user">
        <img alt="" />
        <span>FarmConnect</span>
        <button style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }} onClick={handleLogout}>{t("disconnection")}</button>
      </div>
    </div>
  );
}

export default Navbar;
