import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation'; 

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  
  const [terms, setTerms] = useState({
    fr: (
      <>
        <p>Bienvenue sur FarmConnect !</p>
        <ul>
          <li>En utilisant ce site, vous acceptez les conditions générales suivantes :</li>
          <li>Utilisation du site :</li>
          <li>Ce site est destiné aux agriculteurs et aux acheteurs intéressés par l'achat de produits agricoles. L'utilisation de ce site implique votre accord pour respecter toutes les lois et réglementations locales et nationales applicables.</li>
          <li>Compte utilisateur :</li>
          <li>Vous pouvez être invité à créer un compte utilisateur pour accéder à certaines fonctionnalités du site. Vous êtes responsable de maintenir la confidentialité de votre compte et de votre mot de passe, et vous acceptez de ne pas partager vos informations de connexion avec des tiers.</li>
          <li>Produits et commandes :</li>
          <li>Les informations sur les produits affichées sur ce site sont fournies à titre informatif uniquement. Nous nous réservons le droit de modifier les prix, les descriptions et la disponibilité des produits sans préavis. Les commandes passées sur ce site sont soumises à notre confirmation et peuvent être annulées ou modifiées à notre discrétion.</li>
          <li>Livraison et retours :</li>
          <li>Nous nous efforçons de livrer vos produits dans les délais convenus. Cependant, les retards peuvent parfois survenir en raison de circonstances indépendantes de notre volonté. Consultez notre politique de livraison et de retour pour plus d'informations.</li>
          <li>Propriété intellectuelle :</li>
          <li>Tout le contenu présenté sur ce site, y compris les textes, les images, les vidéos et les logos, est protégé par les lois sur la propriété intellectuelle. Vous acceptez de ne pas copier, modifier, distribuer ou reproduire ce contenu sans notre autorisation écrite.</li>
          <li>En utilisant ce site, vous acceptez pleinement et sans réserve ces conditions générales. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.</li>
          <li>Ces termes et conditions peuvent être mis à jour périodiquement sans préavis. Nous vous encourageons à consulter régulièrement cette page pour rester informé des modifications éventuelles.</li>
        </ul>
      </>
    ),
    ar: (
      <>
        <p dir="rtl">مرحبًا بكم في FarmConnect!</p>
        <ol style={{ listStyleType: 'none', paddingLeft: '0', direction: 'rtl' }}>
          <li>باستخدام هذا الموقع، فإنك توافق على الشروط والأحكام التالية</li>
          <li>:استخدام الموقع</li>
          <li>هذا الموقع مخصص للمزارعين والمشترين المهتمين بشراء المنتجات الزراعية. يعني استخدامك لهذا الموقع موافقتك على الامتثال لجميع القوانين واللوائح المحلية والوطنية المعمول بها</li>
          <li>الحساب الشخصي</li>
          <li>قد يُطلب منك إنشاء حساب شخصي للوصول إلى بعض ميزات الموقع. أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور الخاصة بك، وتوافق على عدم مشاركة معلومات تسجيل الدخول الخاصة بك مع أطراف ثالثة</li>
          <li>المنتجات والطلبات</li>
          <li>تُقدم معلومات المنتجات المعروضة على هذا الموقع لأغراض إعلامية فقط. نحتفظ بالحق في تعديل الأسعار والوصف وتوافر المنتجات دون إشعار. الطلبات المقدمة على هذا الموقع تخضع لتأكيدنا وقد تلغى أو تعدل بتقديرنا</li>
          <li>التوصيل والإرجاع</li>
          <li>نحن نسعى جاهدين لتسليم منتجاتك في الإطار الزمني المتفق عليه. ومع ذلك، قد تحدث تأخيرات أحيانًا بسبب ظروف تتعلق بخارج إرادتنا. يرجى الرجوع إلى سياسة التسليم والإرجاع لمزيد من المعلومات</li>
          <li>الملكية الفكرية</li>
          <li>جميع المحتويات المعروضة على هذا الموقع، بما في ذلك النصوص والصور ومقاطع الفيديو والشعارات، محمية بقوانين الملكية الفكرية. توافق على عدم نسخ أو تعديل أو توزيع أو استنساخ هذا المحتوى دون إذننا الكتابي</li>
          <li>باستخدام هذا الموقع، فإنك توافق بشكل كامل وغير محدود على هذه الشروط والأحكام. إذا لم توافق على هذه الشروط، يرجى عدم استخدام هذا الموقع.</li>
          <li>قد تُحدث هذه الشروط والأحكام بشكل دوري دون إشعار مسبق. نشجعك على التحقق من هذه الصفحة بانتظام للبقاء على اطلاع على أية تغييرات.</li>
        </ol>
      </>
    )
  });

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="terms-and-conditions">
    <Navigation /> {/* Navigation bar */}
    <h1>{t('Terms and Conditions')}</h1> {/* Heading */}
    <div style={{ margin: '0 auto', maxWidth: '600px' }}>
      <p style={{ fontSize: '18px' }}>{terms[i18n.language]}</p> {/* Terms content */}
    </div>
  </div>
  
  );
};

export default TermsAndConditions;
