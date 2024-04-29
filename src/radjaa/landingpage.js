import React from "react";
import { Logo } from "./Logo";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-header">
        <div className="left-contents">
          <div className="social">
            <img className="img" alt="Iconsax bold" src="facebook.svg" />
            <img className="img" alt="Mdi twitter" src="mdi-twitter.svg" />
            <div className="img" />
            <img className="img" alt="Mdi linkedin" src="mdi-linkedin.svg" />
          </div>
          <div className="welcometo">Bienvenue à FarmConnect</div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="carts-and-button">
            <img className="carts" alt="Carts" src="carts.svg" />
            <div className="fill-button">
              <img className="iconsax-linear-call" alt="Iconsax linear call" src="call.svg" />
              <div className="frame">
                <div className="text-wrapper">Call Anytime</div>
                <div className="div">9430144469</div>
              </div>
            </div>
          </div>
          <div className="nav-menu">
            <div className="hovered">
              <div className="text-wrapper-2">Accueil</div>
              <img className="vector" alt="Vector" src="vector-2.svg" />
            </div>
            <div className="text-wrapper-3">A propos</div>
            <div className="text-wrapper-3">Produits</div>
            <div className="text-wrapper-3">Equipements</div>
          </div>
          <Logo className="logo-instance" plant="image.svg" text="FarmConnect" />
        </div>
      </div>
      <div className="section-one">
        <div className="overlap-group">
          <div className="main-contents">
            <div className="bienvenue">BIENVENUE</div>
            <div className="farmconnect">FARMCONNECT</div>
            <div className="text-wrapper-4">.......................................</div>
          </div>
          <img className="group" alt="Group" src="group-1.png" />
          <div className="fill-button-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-5">Se connecter</div>
            </div>
          </div>
          <div className="fill-button-2">
            <div className="text-wrapper-5">S’inscrire</div>
          </div>
        </div>
      </div>
      <img className="icon-whatsapp" alt="Icon whatsapp" src="icon-whatsapp.png" />
    </div>
  );
};
