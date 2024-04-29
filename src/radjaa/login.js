import React from "react";
import { Frame } from "./Frame";
import { Logo } from "./Logo";
import { PropertyDefault } from "./PropertyDefault";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div-2">
        <img className="element-removebg-preview" alt="Element removebg preview" src="1rr-removebg-preview-1.png" />
        <div className="navbar">
          <div className="container-wrapper">
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
              <Logo className="logo-instance" plant="image.svg" text="FarmConnect" />
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
            Atteignez vos clients plus rapidement,
            <br />
          </span>
          <span className="text-wrapper-6">
            Avec nous.
            <br />
          </span>
        </p>
        <div className="group-wrapper">
          <div className="group">
            <div className="overlap">
              <div className="div-wrapper">
                <div className="text-wrapper-7">Content de te revoir!</div>
              </div>
              <p className="p">Entrez vos identifiants pour accéder à votre compte</p>
            </div>
            <Frame
              className="frame-instance"
              divClassName="frame-55-instance"
              frameClassName="design-component-instance-node"
              hasFrame={false}
              text="Email"
            />
            <div className="overlap-2">
              <Frame className="frame-3" divClassName="frame-55-instance" frameClassName="frame-4" text="Name" />
              <div className="text-wrapper-8">mot de passe oublié</div>
            </div>
            <div className="group-2">
              <div className="text-wrapper-9">se rappeler de moi</div>
              <div className="rectangle" />
            </div>
            <div className="vous-n-avez-pas-de-wrapper">
              <p className="vous-n-avez-pas-de">
                <span className="frame-55-instance">Vous n’avez pas de compte? </span>
                <span className="text-wrapper-10">S’inscrire</span>
              </p>
            </div>
            <PropertyDefault
              className="property-1-default"
              frameFrameClassName="property-default-instance"
              text="Se connecter"
            />
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <img className="img" alt="Google" src="icons8-google-1.svg" />
                  <div className="text-wrapper-11">Se connecter avec Google</div>
                </div>
              </div>
              <div className="frame-8">
                <div className="frame-9">
                  <img className="img" alt="Apple logo" src="icons8-apple-logo-1.svg" />
                  <div className="text-wrapper-11">Se connecter avec Apple</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
