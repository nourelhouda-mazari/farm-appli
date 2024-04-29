import React from 'react';
import './SettingsPage.css'; // Import CSS file for styling
import BasicExample from '../Components/Navigation'; // Import the navigation bar component
import Footer from '../Components/footer';
import img from '../Images/Mourad.png'; // Import the user's photo
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const Account = () => {
  const { t } = useTranslation(); // Use the useTranslation hook for translation

  return (
    <div>
      <BasicExample /> {/* Include the navigation bar */}
      <div className="app">
        <div className="profile-sidebar">
          <div className="profile-card">
            <img
              src={img} // Use the imported user photo
              alt="user photo"
              className="profile-photo"
            />
            <div className="profile-info">
              <div className="profile-name">{t('Mourad')}</div>
              <div className="profile-email">{t('Mourad@email.com')}</div>
            </div>
          </div>
        </div>
        <div className="profile-main">
          <div className="profile-header">
            <div className="profile-header__title">{t('Mon Profil')}</div>
          </div>
          <div className="profile-content">
            <div className="profile-section">
              <h2>{t('À Propos de moi')}</h2>
              <p>{t('Je suis passionné par l\'agriculture durable et je m\'efforce de développer des solutions innovantes pour relever les défis auxquels est confronté le secteur agricole. Fort d\'une expérience en ingénierie et d\'une profonde compréhension des pratiques agricoles, je suis déterminé à optimiser les processus agricoles, à réduire l\'impact environnemental et à garantir la sécurité alimentaire pour les générations futures.')}</p>
            </div>
            <div className="profile-section">
              <h2>{t('Intérêts')}</h2>
              <ul>
                <li>{t('Conception : J\'apprécie la création et la mise en œuvre de technologies et de solutions agricoles innovantes.')}</li>
                <li>{t('Agriculture Durable : Je m\'engage à promouvoir des pratiques agricoles respectueuses de l\'environnement.')}</li>
                <li>{t('Engagement Communautaire : Je crois en l\'établissement de relations solides au sein de la communauté agricole et en le partage des connaissances et des ressources pour un bénéfice mutuel.')}</li>
                <li>{t('Activités en Plein Air : Dans mes temps libres, j\'apprécie passer du temps en plein air, explorer la nature et m\'adonner à des activités telles que la randonnée et le jardinage.')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
