import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function HeaderAndFooterExample() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }; 

  return (
    <>
    <Form.Label>{t("insert an offer or coupon")}</Form.Label>
    <Form.Control type="text" placeholder= {t("Enter the offer or coupon")}/>
    <Card className="text-center">
      <Card.Header>{t("Offers and Coupons")}</Card.Header>
      <Card.Body>
        <Card.Title>{t("Special title treatment")}</Card.Title>
        <Card.Text>
          {t("With supporting text below as a natural lead-in to additional content.")}
        </Card.Text>
        <Button variant="primary">{t("use")}</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{t("2 days ago")}</Card.Footer>
    </Card>
    </>
  );
}

export default HeaderAndFooterExample;