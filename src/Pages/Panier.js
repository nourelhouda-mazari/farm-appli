import { useCallback } from "react";
import "./Panier.css";

const Panier = () => {
  const onButton4Click = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <div className="panier">
      <section className="navigation-parent">
        <header className="navigation">
          <div className="small-one">
            <div className="contact">
              <img className="map-pin-icon" alt="" />
              <div className="store-location-lincoln-">Somewhere in algeria</div>
            </div>
            <div className="links">
              <div className="eng">
                <div className="eng1">Eng</div>
                <img className="group-icon" alt="" />
              </div>
              <div className="usd">
                <div className="usd1">Alg</div>
                <img className="group-icon1" alt="" />
              </div>
              <div className="devider" />
              <div className="account">
                <div className="sign-in">Sign In</div>
                <div className="div">/</div>
                <div className="sign-up">Sign Up</div>
              </div>
            </div>
          </div>
          <div className="midle">
            <div className="logo-wrapper">
              <div className="logo">
                <div className="plant-f-r-a-m-e">
                  <img
                    className="plant-1-icon"
                    loading="lazy"
                    alt=""
                    src="/plant-1.svg"
                  />
                </div>
                <h1 className="ecobazar">{`FarmConnect `}</h1>
              </div>
            </div>
            <div className="search-wrapper">
              <div className="search">
                <div className="searech">
                  <img
                    className="search-icon"
                    loading="lazy"
                    alt=""
                    src="/search.svg"
                  />
                  <input className="search1" placeholder="Search" type="text" />
                </div>
                <button className="button">
                  <div className="search2">Search</div>
                </button>
              </div>
            </div>
            <div className="shopping-cart-f-r-a-m-e">
              <div className="icons">
                <img className="heart-icon" alt="" />
                <div className="no-f-r-a-m-e">
                  <div className="devider1" />
                </div>
                <div className="shopping-card">
                  <div className="cart">
                    <img
                      className="bag-icon"
                      loading="lazy"
                      alt=""
                      src="/bag.svg"
                    />
                    <div className="no">
                      <div className="nav-links-f">2</div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="shopping-cart">Mon panier</div>
                    <div className="footer-i-n" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-links">
            <div className="nav-links1">
              <div className="nav-links2">
                <div className="home">Home</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
              <div className="nav-links3">
                <div className="home1">Shop</div>
                <img
                  className="chevron-down-icon1"
                  alt=""
                  src="/chevron-down-1.svg"
                />
              </div>
              <div className="nav-links4">
                <div className="home2">Pages</div>
                <img
                  className="chevron-down-icon2"
                  alt=""
                  src="/chevron-down-1.svg"
                />
              </div>
              <div className="nav-links5">
                <div className="home3">Blog</div>
                <img
                  className="chevron-down-icon3"
                  alt=""
                  src="/chevron-down-1.svg"
                />
              </div>
              <div className="nav-links6">
                <div className="home4">a propos</div>
                <img className="chevron-down-icon4" alt="" />
              </div>
              <div className="nav-links7">
                <div className="home5">Contactez nous</div>
                <img className="chevron-down-icon5" alt="" />
              </div>
            </div>
            <div className="call-now">
              <img
                className="phonecall-1-icon"
                loading="lazy"
                alt=""
                src="/phonecall-1.svg"
              />
              <div className="terms-condition-l">9430144469</div>
            </div>
          </div>
        </header>
        <div className="breadcrumbs">
          <div className="location">
            <img className="home-1-1-icon" alt="" src="/home1-1.svg" />
            <img className="group-icon2" alt="" />
            <div className="home6">Home</div>
            <img className="vector-icon" alt="" />
            <div className="home7">Home</div>
            <img className="vector-icon1" alt="" />
            <div className="home8">Home</div>
            <img className="vector-icon2" alt="" />
            <div className="home9">Vegetables</div>
            <div className="order-history-l-i-n-k-s">
              <img
                className="shopping-cart-l-i-n-k-s"
                alt=""
                src="/shopping-cart-l-i-n-k-s.svg"
              />
            </div>
            <div className="vegetables">Wishlist</div>
          </div>
        </div>
        <div className="link-footer-t-e-x-t-wrapper">
          <div className="link-footer-t-e-x-t">
            <div className="help-t-e-x-t">
              <h1 className="mon-panier">Mon Panier</h1>
            </div>
            <div className="wishlist">
              <div className="frame-parent">
                <div className="frame-wrapper">
                  <div className="frame-group">
                    <div className="produits-wrapper">
                      <div className="produits">Produits</div>
                    </div>
                    <div className="prix">Prix</div>
                    <div className="tat-du-stock-wrapper">
                      <div className="tat-du-stock">état du stock</div>
                    </div>
                  </div>
                </div>
                <div className="line-wrapper">
                  <div className="frame-child" />
                </div>
                <div className="wishlist-product-wrapper">
                  <div className="wishlist-product">
                    <div className="product-wrapper">
                      <div className="product">
                        <img
                          className="image-icon"
                          loading="lazy"
                          alt=""
                          src="/image@2x.png"
                        />
                        <div className="green-capsicum-wrapper">
                          <div className="green-capsicum">poivron</div>
                        </div>
                      </div>
                    </div>
                    <div className="price-wrapper">
                      <div className="price">
                        <div className="out-of-stock">1499</div>
                        <div className="div1">$20.99</div>
                      </div>
                    </div>
                    <div className="action-bar">
                      <div className="stock-status-wrapper">
                        <button className="stock-status">
                          <div className="in-stock">en Stock</div>
                        </button>
                      </div>
                      <div className="action">
                        <button className="button1">
                          <div className="normal">ajouter au panier</div>
                        </button>
                        <div className="close-icon">
                          <img
                            className="close-icon1"
                            loading="lazy"
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="devider-wrapper">
                  <div className="devider2" />
                </div>
                <div className="wishlist-product-container">
                  <div className="wishlist-product1">
                    <div className="product-container">
                      <div className="product1">
                        <img
                          className="image-icon1"
                          alt=""
                          src="/image-1@2x.png"
                        />
                        <div className="green-capsicum-container">
                          <div className="green-capsicum1">chou</div>
                        </div>
                      </div>
                    </div>
                    <div className="price-container">
                      <div className="price1">
                        <div className="div2">45.00</div>
                      </div>
                    </div>
                    <div className="frame-container">
                      <div className="stock-status-container">
                        <button className="stock-status1">
                          <div className="in-stock1">en Stock</div>
                        </button>
                      </div>
                      <div className="action1">
                        <button className="button2">
                          <div className="normal1">ajouter au panier</div>
                        </button>
                        <div className="close-wrapper">
                          <img
                            className="close-icon2"
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="devider-container">
                  <div className="devider3" />
                </div>
                <div className="wishlist-product-frame">
                  <div className="wishlist-product2">
                    <div className="product2">
                      <img
                        className="image-icon2"
                        alt=""
                        src="/image-2@2x.png"
                      />
                      <div className="green-capsicum-frame">
                        <div className="green-capsicum2">mangue</div>
                      </div>
                    </div>
                    <div className="price2">
                      <div className="div3">09.00</div>
                    </div>
                    <div className="wishlist-product-inner">
                      <div className="frame-div">
                        <div className="stock-status-frame">
                          <button className="stock-status2">
                            <div className="out-of-stock1">
                              repture de Stock
                            </div>
                          </button>
                        </div>
                        <div className="action2">
                          <button className="button3">
                            <div className="normal2">ajouter au panier</div>
                          </button>
                          <div className="close-icon3">
                            <img
                              className="close-icon4"
                              alt=""
                              src="/close-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="devider4" />
              </div>
              <div className="button-wrapper">
                <button className="button4" onClick={onButton4Click}>
                  <div className="normal3">Acheter</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="subscribe-our-newsletter">
          <div className="subscribe-our-newsletter-child" />
          <div className="subcribe-our-newsletter-parent">
            <div className="subcribe-our-newsletter">
              Subcribe our Newsletter
            </div>
            <div className="pellentesque-eu-nibh">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </div>
          </div>
          <div className="subscribe">
            <div className="input-field">
              <div className="your-email-address">Your email address</div>
            </div>
            <div className="button5">
              <div className="subscribe1">Subscribe</div>
            </div>
          </div>
          <div className="social-media-parent">
            <img className="social-media-icon" alt="" />
            <img className="social-media-icon1" alt="" />
            <img className="social-media-icon2" alt="" />
            <img className="social-media-icon3" alt="" />
          </div>
        </div>
        <div className="footer1">
          <div className="fotter">
            <div className="company-wrapper">
              <div className="company">
                <div className="logo1">
                  <div className="plant-instance">
                    <img
                      className="plant-1-icon1"
                      alt=""
                      src="/plant-1-1.svg"
                    />
                  </div>
                  <h1 className="ecobazar1">{`FarmConnect `}</h1>
                </div>
                <div className="morbi-cursus-porttitor">FarmConnect</div>
                <div className="cta">
                  <div className="button6">
                    <div className="div4">(219) 555-0114</div>
                  </div>
                  <div className="or">or</div>
                  <div className="button7">
                    <div className="proxygmailcom">Proxy@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-account-wrapper">
              <div className="my-account">
                <div className="my-account1">My Account</div>
                <div className="links1">
                  <div className="my-account2">My Account</div>
                  <div className="order-history">Order History</div>
                  <div className="shoping-cart">Shoping Cart</div>
                  <div className="wishlist1">Wishlist</div>
                </div>
              </div>
            </div>
            <div className="help">
              <div className="helps">Helps</div>
              <div className="links2">
                <div className="contact1">Contact</div>
                <div className="faqs">Faqs</div>
                <div className="terms-condition">{`Terms & Condition`}</div>
                <div className="privacy-policy">Privacy Policy</div>
              </div>
            </div>
            <div className="proxy">
              <div className="proxy1">Proxy</div>
              <div className="links3">
                <div className="about">About</div>
                <div className="shop">Shop</div>
                <div className="product3">Product</div>
                <div className="track-order">Track Order</div>
              </div>
            </div>
            <div className="categories">
              <div className="categories1">Categories</div>
              <div className="links4">
                <div className="fruit-vegetables">{`Fruit & Vegetables`}</div>
                <div className="meat-fish">{`Meat & Fish`}</div>
                <div className="bread-bakery">{`Bread & Bakery`}</div>
                <div className="beauty-health">{`Beauty & Health`}</div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="ecobazar-ecommerce">
             FarmConnect © 2024. All Rights Reserved
            </div>
            <div className="methodapplepay-parent">
              <img className="methodapplepay-icon" alt="" />
              <img className="methodvisa-icon" alt="" />
              <img className="methoddiscover-icon" alt="" />
              <img className="methodmastercard-icon" alt="" />
              <div className="cart1">
                <div className="base" />
                <img className="lock-1-icon" alt="" />
                <div className="secure">Secure</div>
                <div className="payment">Payment</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Panier;
