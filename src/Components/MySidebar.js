import React from 'react';
import { auth } from '../firebase'; // Importez l'initialisation de Firebase
import { useNavigate } from 'react-router-dom'; // Importez useNavigate depuis react-router-dom
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import Logo from '../Images/logo-removebg-preview.png';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const MySidebar = ({ onItemClick }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleItemClick = (component) => {
    onItemClick(component);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.logt(("Successful logout"));
    }).catch((error) => {
      console.log(t("Error when logging out :"), error);
    });
  };

  const handleFarmConnectClick = () => {
    navigate('/'); // Redirigez l'utilisateur vers la page d'accueil
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          {t("Settings")}
          </a>
          <img src={Logo} alt="Logo" />
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem onClick={() => handleItemClick('InfoPersonnelles')} icon="columns">{t("My personal informations")}</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Coupons')} icon="table">{t("Coupons")}</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Panier')} icon="user">{t("My cart")}</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Support')} icon="chart-line">{t("Support")}</CDBSidebarMenuItem>
            <CDBSidebarMenuItem onClick={() => handleItemClick('Termes')} icon="exclamation-circle">{t("terms and conditions")}</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <button onClick={handleLogout}>{t("disconnection")}</button>
          <div
            style={{
              padding: '20px 5px',
              cursor: 'pointer',
            }}
            onClick={handleFarmConnectClick}
          >
            FarmConnect
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default MySidebar;
