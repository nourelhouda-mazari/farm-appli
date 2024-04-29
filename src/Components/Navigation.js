import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from '../Images/logo.jpg';
import Cart from '../Images/chariot-de-chariot.png';
import Call from '../Images/silhouette-de-messages.png';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();
  
  const handleMaindoeuvreClick = () => {
    navigate('/workforce');
  };

  const handleProductsClick = () => {
    navigate('/products');
  };

  const handleEquipementsClick = () => {
    navigate('/equipements');
  };

  const handleAccountClick = () => {
    navigate('/account');
  };

  const handlePanierClick = () => {
    navigate('/panier');
  };

  const handleCallClick = () => {
    navigate('/ContactUs'); // Navigate to the correct route '/ContactUs'
  };

  const ProductsPlaceholder = t("search for products");

  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
      <Container style={{ padding: "0%" }}>
        <Navbar.Brand href="/" className="d-flex align-items-center brand">
          <img src={Image} alt="image" />
          <span className="brand-text">FarmConnect</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between">
            <Nav.Link className="ms-3" style={{ marginRight: '1rem' }} onClick={handleMaindoeuvreClick}>{t("workforce")}</Nav.Link>
            <Nav.Link className="ms-3" style={{ marginRight: '1rem' }} onClick={handleProductsClick}>{t("products")}</Nav.Link>
            <Nav.Link className="ms-3" style={{ marginRight: '1rem' }} onClick={handleEquipementsClick}>{t("equipements")}</Nav.Link>
            <SearchBar placeholderText={ProductsPlaceholder} />
            <div style={{ padding: '7px'}}>
              <LanguageSelector />
            </div>
            <Nav.Link onClick={handleAccountClick}>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px', marginRight: '10px' }} />
            </Nav.Link>
            <Nav.Link onClick={handlePanierClick}>
              <img src={Cart} alt={t("cart")} style={{ width: '25px', marginRight: '10px' }} />
            </Nav.Link>
            <Nav.Link onClick={handleCallClick}>
              <img src={Call} alt="contact us" style={{ width: '25px' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
