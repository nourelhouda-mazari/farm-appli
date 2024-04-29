import React from "react";
import { Frame } from "./Frame";
import { Logo } from "./Logo";
import { PropertyDefault } from "./PropertyDefault";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="div-2">
        <img className="element-removebg-preview" alt="Element removebg preview" src="1rr-removebg-preview-1.png" />
        <div className="navbar">
          <div className="overlap">
            <div className="container">
              <div className="carts-and-button">
                <img className="carts" alt="Carts" src="carts.svg" />
                <div className="fill-button">
                  <img className="img" alt="Iconsax linear call" src="call.svg" />
                  <div className="frame-2">
                    <div className="text-wrapper-2">Call Anytime</div>
                    <div className="text-wrapper-3">9430144469</div>
                  </div>
                </div>
              </div>
              <div className="nav-menu">
                <div className="hovered">
                  <div className="text-wrapper-4">Accueil</div>
                  <img className="vector" alt="Vector" src="vector-2.svg" />
                </div>
                <div className="text-wrapper-5">A propos</div>
                <div className="text-wrapper-5">Produits</div>
                <div className="text-wrapper-5">Equipements</div>
              </div>
              <div className="overlap-group-2">
                <Logo className="logo-instance" plant="image.svg" text="FarmConnect" />
                <Logo className="logo-instance" hasDiv={false} plant="plant-1-2.svg" />
                <Logo className="logo-instance" hasDiv={false} plant="plant-1.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="top-header">
          <div className="left-contents">
            <img className="social" alt="Social" src="social.svg" />
            <div className="welcometo">Bienvenue à FarmConnect</div>
          </div>
        </div>
        <p className="atteignez-vos">
          <span className="span">
            Atteignez vos clients plus rapidement, <br />
          </span>
          <span className="text-wrapper-6">
            Avec nous.
            <br />
          </span>
        </p>
        <div className="group-wrapper">
          <div className="group">
            <div className="get-started-now-wrapper">
              <div className="get-started-now">Commencez maintenant</div>
            </div>
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="name-2">Nom</div>
              </div>
              <div className="frame-4">
                <div className="enter-your-name-wrapper">
                  <div className="enter-your-name">Entrer votre nom</div>
                </div>
              </div>
            </div>
            <Frame
              className="frame-instance"
              divClassName="design-component-instance-node"
              frameClassName="frame-55-instance"
              text="Entrer votre email"
            />
            <Frame
              className="frame-5"
              divClassName="design-component-instance-node"
              frameClassName="frame-55-instance"
              text="Entrer votre mot de passe"
            />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <img className="line" alt="Line" src="line-2.svg" />
                <div className="frame-6">
                  <div className="text-wrapper-7">Or</div>
                </div>
              </div>
            </div>
            <div className="group-2">
              <p className="i-agree-to-the-terms">J&#39;accepte les conditions et la politique</p>
              <div className="rectangle" />
            </div>
            <div className="frame-7">
              <div className="have-an-account-sign-wrapper">
                <p className="have-an-account-sign">
                  <span className="text-wrapper-8">Vous avez un compte ?&nbsp;&nbsp;</span>
                  <span className="text-wrapper-9">Connectez vous </span>
                </p>
              </div>
            </div>
            <PropertyDefault
              className="property-1-default"
              frameFrameClassName="property-default-instance"
              text="S’inscrire"
            />
            <div className="frame-8">
              <div className="frame-9">
                <img className="img" alt="Google" src="icons8-google-1.svg" />
                <div className="text-wrapper-10">S’inscrire avec Google</div>
              </div>
            </div>
            <div className="frame-10">
              <div className="frame-11">
                <img className="img" alt="Apple logo" src="icons8-apple-logo-1.svg" />
                <div className="text-wrapper-10">S’inscrire avec Apple</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
