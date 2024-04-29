import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Button } from "./Button";
import { Close } from "./Close";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { StockStatus } from "./StockStatus";
import { WishlistProduct } from "./WishlistProduct";
import "./style.css";

export const Panier = () => {
  return (
    <div className="panier">
      <div className="div-5">
        <div className="wishlist">
          <img className="devider-3" alt="Devider" src="devider-2.svg" />
          <div className="wishlist-product-2">
            <div className="product-2">
              <img className="image-2" alt="Image" src="image-3.png" />
              <div className="green-capsicum-2">mangue</div>
            </div>
            <div className="action-2">
              <Button
                className="button-4"
                divClassName="button-5"
                size="medium"
                status={false}
                text="ajouter au panier"
                type="fill"
              />
              <Close className="close-instance" />
            </div>
            <StockStatus className="stock-status-2" status="out-of-stock" text="repture de Stock" />
          </div>
          <img className="devider-4" alt="Devider" src="devider-3.svg" />
          <WishlistProduct
            actionClassName="wishlist-product-3"
            buttonText="ajouter au panier"
            className="wishlist-product-instance"
            image="image-4.png"
            priceProperty1="price"
            priceText="45.00"
            stockStatusText="en Stock"
            text="chou"
          />
          <img className="devider-5" alt="Devider" src="devider-4.svg" />
          <WishlistProduct
            actionClassName="wishlist-product-3"
            buttonText="ajouter au panier"
            className="wishlist-product-4"
            image="image-5.png"
            priceHasDiv={false}
            priceProperty1="sale"
            priceText="1499"
            stockStatusText="en Stock"
            text="poivron"
          />
          <div className="header">
            <div className="header-2">
              <div className="produits">PRODUITS</div>
              <div className="prix">PRIX</div>
              <div className="tat-du-stock">ÉTAT DU STOCK</div>
            </div>
            <img className="line" alt="Line" src="line-14.svg" />
          </div>
          <Button className="button-6" size="large" status={false} text="Acheter" type="fill" />
        </div>
        <div className="text-wrapper-19">Mon Panier</div>
        <Breadcrumbs className="breadcrumbs-instance" hasGroup={false} home="home-1-1-2.svg" text="Wishlist" />
        <Navigation
          cartClassName="navigation-3"
          className="navigation-instance"
          devider="devider-5.svg"
          divClassName="navigation-7"
          hasHeart={false}
          hasSmallOne={false}
          logoPlant="plant-1-4.svg"
          logoText="FarmConnect"
          midleClassName="navigation-2"
          navLinksClassName="navigation-4"
          navLinksDivClassName="navigation-5"
          navLinksDivClassName1="navigation-6"
          navLinksDivClassName2="navigation-6"
          navLinksDivClassName3="navigation-6"
          navLinksDivClassName4="navigation-6"
          navLinksDivClassNameOverride="navigation-6"
          navLinksText="a propos"
          navLinksText1="Contactez nous"
          phonecall="phonecall-1-2.svg"
          property1="default"
          search="search-2.svg"
          text="Mon panier"
          text1=""
          text2="9430144469"
        />
        <Footer
          className="footer-instance"
          companyClassName="footer-3"
          fotterClassName="footer-2"
          hasCategories={false}
          hasCta={false}
          hasDiv={false}
          hasFrame={false}
          hasProxy={false}
          hasSubscribeOur={false}
          logoPlant="plant-1-5.svg"
          logoText="FarmConnect"
          property1="normal"
          text="FarmConnect"
        />
      </div>
    </div>
  );
};
