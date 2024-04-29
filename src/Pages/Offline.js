import React from 'react';
import HorsCnx from '../Images/HorsCnx.png';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function Offline() {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
     };

    const offlineContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f0f0f0',
    };

    const offlineImage = {
        width: '300px',
    };

    const offlineTitle = {
        color: '#333',
        fontSize: '2rem',
        textAlign: 'center',
        marginTop: '1rem',
    };

    const offlineMessage = {
        color: '#666',
        fontSize: '1.2rem',
        textAlign: 'center',
        marginTop: '1rem',
    };

    const retryButton = {
        marginTop: '1rem',
    };

    return (
      <div style={offlineContainer}>
        <img src={HorsCnx} alt={t("No connection")}style={offlineImage} />
        <h3 style={offlineTitle}>{t("Oh no!")}</h3>
        <p style={offlineMessage}>{t("No connection")}</p>
        <Button variant="outline-success" style={retryButton}>{t("try again")}</Button>
      </div>
    );
}

export default Offline;