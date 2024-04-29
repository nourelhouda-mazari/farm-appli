import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import './Footer.css';
import i18n from '../i18n';
import { Link } from 'react-router-dom';
import TermsAndConditions from './Termes';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-body-secondary text-light">
      <div className="footer1">
        <div className="footer">
          <div className="company-wrapper">
            <div className="company">
              <h1 className="ecobazar2">{t('FarmConnect')}</h1>
              <div className="morbi-cursus-porttitor">
                {t('Produits vegetales et Produits Agricoles')}
              </div>
            </div>
          </div>
          <div className="my-account-wrapper">
            <div className="my-account">
              <div className="my-account1">{t('Mon Compte')}</div>
              <div className="links">
                <div className="my-account2">{t('Mon Compte')}</div>
                <div className="order-history">{t('Historique des Commandes')}</div>
              </div>
            </div>
          </div>
          <div className="help">
            <div className="helps">{t('Aide')}</div>
            <div className="links1">
              <div className="contact2">{t('Contact')}</div>
              <div className="faqs">{t('FAQs')}</div>
              <div className="terms-condition">
                <Link to="/termes" className="green-link">
                  {t('Termes & Conditions')}
                </Link>
              </div>
              <div className="privacy-policy">{t('Politique de Confidentialité')}</div>
            </div>
          </div>
          <div className="proxy">
            <div className="proxy1">{t('Proxy')}</div>
            <div className="links2">
              <div className="about">{t('À Propos')}</div>
              <div className="shop">{t('Boutique')}</div>
              <div className="product">{t('Produit')}</div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            {t('FarmConnect © 2024. Tous Droits Réservés')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
