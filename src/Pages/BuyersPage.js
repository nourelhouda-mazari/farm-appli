import { useCallback } from "react";
import "./BuyersPage.css";

const BuyersPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  return (
    <div className="buyers-page">
      <div className="buyers-page-child" />
      <section className="frame-parent">
        
        <div className="frame-wrapper">
          <div className="frame-container">
            <div className="bannar-wrapper">
              <div className="bannar">
                <div className="bannar-big">
                  <div className="fresh-healthy-organic-food-parent">
                    <h1 className="fresh-healthy">{`FarmConnect `}</h1>
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <div className="description">
                        <div className="sale-up-to-parent">
                          <div className="sale-up-to">Sale up to</div>
                          <div className="off-wrapper">
                            <div className="off">30% OFF</div>
                          </div>
                        </div>
                        <div className="free-shipping-on">
                          Free shipping on all your order.
                        </div>
                      </div>
                    </div>
                    <button className="button">
                      <div className="shop-now">{`acheter `}</div>
                      <div className="group-wrapper">
                        <img className="group-icon" alt="" src="/group.svg" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-div">
              <div className="heading-parent">
                <div className="heading">
                  <h1 className="popular-categories">Categories</h1>
                  <div className="button-wrapper">
                    <div className="button1">
                      <div className="view-all">Voir tout</div>
                      <div className="group-container">
                        <img
                          className="group-icon1"
                          alt=""
                          src="/group-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-parent">
                  <div className="category">
                    <div className="image-1-wrapper">
                      <img
                        className="image-1-icon"
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                    </div>
                    <div className="fresh-fruit">Fruit frais</div>
                  </div>
                  <div className="category1">
                    <div className="image-1-container">
                      <img
                        className="image-1-icon1"
                        loading="lazy"
                        alt=""
                        src="/image-1-1@2x.png"
                      />
                    </div>
                    <div className="fresh-fruit1">Légumes frais</div>
                  </div>
                  <div className="category2">
                    <div className="image-1-frame">
                      <img
                        className="image-1-icon2"
                        loading="lazy"
                        alt=""
                        src="/image-1-2@2x.png"
                      />
                    </div>
                    <div className="fresh-fruit2">Equipements</div>
                  </div>
                  <div className="category3">
                    <div className="image-1-wrapper1">
                      <img
                        className="image-1-icon3"
                        loading="lazy"
                        alt=""
                        src="/image-1-3@2x.png"
                      />
                    </div>
                    <div className="fresh-fruit3">Terrains</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-wrapper">
              <div className="heading1">
                <h1 className="popular-categories1">Légumes et Fruits</h1>
                <div className="button-container">
                  <div className="button2">
                    <div className="view-all1">Voir tout</div>
                    <div className="group-frame">
                      <img className="group-icon2" alt="" src="/group-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-5n-parent">
              <div className="product-5n">
                <div className="product-image">
                  <img
                    className="image-icon"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <div className="product-info">
                  <div className="info">
                    <div className="green-apple">Pomme vert</div>
                    <div className="price">
                      <div className="div1">100</div>
                      <div className="div2">$20.99</div>
                    </div>
                  </div>
                  <div className="rating">
                    <img className="rating-child" alt="" />
                    <img className="rating-item" alt="" />
                    <img className="rating-inner" alt="" />
                    <img className="star-icon" alt="" />
                    <img className="rating-child1" alt="" />
                  </div>
                  <img className="add-to-cart" alt="" src="/add-to-cart.svg" />
                </div>
                <div className="tag">
                  <div className="sale">Sale</div>
                  <div className="div3">50%</div>
                </div>
              </div>
              <div className="product-5n1">
                <div className="product-image1">
                  <img
                    className="image-icon1"
                    loading="lazy"
                    alt=""
                    src="/image-11@2x.png"
                  />
                </div>
                <div className="product-info1">
                  <div className="info1">
                    <div className="green-apple1">Orange</div>
                    <div className="price1">
                      <div className="div4">120.00</div>
                    </div>
                  </div>
                 
                  <img
                    className="add-to-cart1"
                    alt=""
                    src="/add-to-cart-1.svg"
                  />
                </div>
              </div>
              <div className="product-5n2">
                <div className="product-image2">
                  <img
                    className="image-icon2"
                    loading="lazy"
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
                <div className="product-info2">
                  <div className="info2">
                    <div className="green-apple2">Chou</div>
                    <div className="price2">
                      <div className="div5">112.00</div>
                    </div>
                  </div>
                  
                  <img
                    className="add-to-cart2"
                    alt=""
                    src="/add-to-cart-2.svg"
                  />
                </div>
                <img className="add-to-wishlist" alt="" />
                <img className="quick-view-icon" alt="" />
              </div>
              <div className="product-5n3">
                <div className="product-image3">
                  <img
                    className="image-icon3"
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className="product-info3">
                  <div className="info3">
                    <div className="green-apple3">Laitue verte</div>
                    <div className="price3">
                      <div className="div6">9.00</div>
                    </div>
                  </div>
                  
                  <img
                    className="add-to-cart3"
                    alt=""
                    src="/add-to-cart-1.svg"
                  />
                </div>
              </div>
              <div className="product-5n4">
                <div className="product-image4">
                  <img
                    className="image-icon4"
                    loading="lazy"
                    alt=""
                    src="/image-4@2x.png"
                  />
                </div>
                <div className="product-info4">
                  <div className="info4">
                    <div className="green-apple4">Aubergine</div>
                    <div className="price4">
                      <div className="div7">34.00</div>
                    </div>
                  </div>
                  
                  <img
                    className="add-to-cart4"
                    alt=""
                    src="/add-to-cart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="product-5n-group">
              <div className="product-5n5">
                <div className="product-image5">
                  <img
                    className="image-icon5"
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
                <div className="product-info5">
                  <div className="info5">
                    <div className="green-apple5">Big Potatoes</div>
                    <div className="price5">
                      <div className="div8">20.00</div>
                    </div>
                  </div>
                  
                  <img
                    className="add-to-cart5"
                    alt=""
                    src="/add-to-cart-1.svg"
                  />
                </div>
              </div>
              <div className="product-5n6">
                <div className="product-image6">
                  <img
                    className="image-icon6"
                    loading="lazy"
                    alt=""
                    src="/image-6@2x.png"
                  />
                </div>
                <div className="product-info6">
                  <div className="info6">
                    <div className="green-apple6">Maïs</div>
                    <div className="price6">
                      <div className="div9">20.00</div>
                    </div>
                  </div>
                  
                  <img
                    className="add-to-cart6"
                    alt=""
                    src="/add-to-cart-1.svg"
                  />
                </div>
              </div>
              <div className="product-5n7">
                <div className="product-image7">
                  <img
                    className="image-icon7"
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                </div>
                <div className="product-info7">
                  <div className="info7">
                    <div className="green-apple7">Chou-fleur frais</div>
                    <div className="price7">
                      <div className="div10">12.00</div>
                    </div>
                  </div>
                  
                  <img
                    className="add-to-cart7"
                    alt=""
                    src="/add-to-cart-1.svg"
                  />
                </div>
              </div>
              <div className="product-5n8">
                <div className="product-image8">
                  <img
                    className="image-icon8"
                    loading="lazy"
                    alt=""
                    src="/image-8@2x.png"
                  />
                </div>
                <div className="product-info8">
                  <div className="info8">
                    <div className="green-apple8">Poivron vert</div>
                    <div className="price8">
                      <div className="div11">9.00</div>
                      <div className="div12" />
                    </div>
                  </div>
                  
                  <img className="add-to-cart8" alt="" src="/add-to-cart.svg" />
                </div>
                <div className="tag1">
                  <div className="sale1">Sale</div>
                  <div className="div13">50%</div>
                </div>
              </div>
              <div className="product-5n9">
                <div className="product-image9">
                  <img className="image-icon9" alt="" src="/image-9@2x.png" />
                </div>
                <div className="product-info9">
                  <div className="info9">
                    <div className="green-apple9">Chili vert</div>
                    <div className="price9">
                      <div className="div14">34.00</div>
                    </div>
                  </div>
                  
                  <img
                    className="add-to-cart9"
                    alt=""
                    src="/add-to-cart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="heading-container">
              <div className="heading2">
                <h1 className="popular-categories2">Equipements</h1>
                <div className="button-frame">
                  <div className="button3">
                    <div className="view-all2">Voir tout</div>
                    <div className="group-wrapper1">
                      <img className="group-icon3" alt="" src="/group-3.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent1">
              <div className="frame-wrapper1">
                <div className="product-5n-container">
                  <div className="product-5n10">
                    <div className="product-image10">
                      <img
                        className="image-icon10"
                        loading="lazy"
                        alt=""
                        src="/image@2x.png"
                      />
                    </div>
                    <div className="product-info10">
                      <div className="info10">
                        <div className="green-apple10">Green Apple</div>
                        <div className="price10">
                          <div className="div15">200</div>
                          <div className="div16" />
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart10"
                        alt=""
                        src="/add-to-cart.svg"
                      />
                    </div>
                    <div className="tag2">
                      <div className="sale2">Sale</div>
                      <div className="div17">50%</div>
                    </div>
                  </div>
                  <div className="product-5n11">
                    <div className="product-image11">
                      <img
                        className="image-icon11"
                        loading="lazy"
                        alt=""
                        src="/image-11@2x.png"
                      />
                    </div>
                    <div className="product-info11">
                      <div className="info11">
                        <div className="green-apple11">Fresh Indian Malta</div>
                        <div className="price11">
                          <div className="div18">300</div>
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart11"
                        alt=""
                        src="/add-to-cart-1.svg"
                      />
                    </div>
                  </div>
                  <div className="product-5n12">
                    <div className="product-image12">
                      <img
                        className="image-icon12"
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <div className="product-info12">
                      <div className="info12">
                        <div className="green-apple12">Indian cabbage</div>
                        <div className="price12">
                          <div className="div19">100</div>
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart12"
                        alt=""
                        src="/add-to-cart-2.svg"
                      />
                    </div>
                    <img className="add-to-wishlist1" alt="" />
                    <img className="quick-view-icon1" alt="" />
                  </div>
                  <div className="product-5n13">
                    <div className="product-image13">
                      <img
                        className="image-icon13"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                    <div className="product-info13">
                      <div className="info13">
                        <div className="green-apple13">Green Lettuce</div>
                        <div className="price13">
                          <div className="div20">200</div>
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart13"
                        alt=""
                        src="/add-to-cart-1.svg"
                      />
                    </div>
                  </div>
                  <div className="product-5n14">
                    <div className="product-image14">
                      <img
                        className="image-icon14"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="product-info14">
                      <div className="info14">
                        <div className="green-apple14">Eggplant</div>
                        <div className="price14">
                          <div className="div21">120</div>
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart14"
                        alt=""
                        src="/add-to-cart-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading3">
                <h1 className="popular-categories3">Terrains</h1>
                <div className="button-wrapper1">
                  <div className="button4">
                    <div className="view-all3">Voir tout</div>
                    <div className="group-wrapper2">
                      <img className="group-icon4" alt="" src="/group-3.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent2">
              <div className="frame-parent3">
                <div className="product-5n-parent1">
                  <div className="product-5n15">
                    <div className="product-image15">
                      <img
                        className="image-icon15"
                        loading="lazy"
                        alt=""
                        src="/image@2x.png"
                      />
                    </div>
                    <div className="product-info15">
                      <div className="info15">
                        <div className="green-apple15">Green Apple</div>
                        <div className="price15">
                          <div className="div22">200</div>
                          <div className="div23" />
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart15"
                        alt=""
                        src="/add-to-cart.svg"
                      />
                    </div>
                    <div className="tag3">
                      <div className="sale3">Sale</div>
                      <div className="div24">50%</div>
                    </div>
                  </div>
                  <div className="product-5n16">
                    <div className="product-image16">
                      <img
                        className="image-icon16"
                        loading="lazy"
                        alt=""
                        src="/image-11@2x.png"
                      />
                    </div>
                    <div className="product-info16">
                      <div className="info16">
                        <div className="green-apple16">Fresh Indian Malta</div>
                        <div className="price16">
                          <div className="div25">300</div>
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart16"
                        alt=""
                        src="/add-to-cart-1.svg"
                      />
                    </div>
                  </div>
                  <div className="product-5n17">
                    <div className="product-image17">
                      <img
                        className="image-icon17"
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <div className="product-info17">
                      <div className="info17">
                        <div className="green-apple17">Indian cabbage</div>
                        <div className="price17">
                          <div className="div26">100</div>
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart17"
                        alt=""
                        src="/add-to-cart-2.svg"
                      />
                    </div>
                    <img className="add-to-wishlist2" alt="" />
                    <img className="quick-view-icon2" alt="" />
                  </div>
                </div>
                <div className="big-products-wrapper">
                  <div className="big-products">
                    <div className="image">
                      <img
                        className="image-icon18"
                        alt=""
                        src="/image-18@2x.png"
                      />
                      <div className="image-inner">
                        <div className="tag-parent">
                          <button className="tag4">
                            <div className="sale4">Sale</div>
                            <div className="div27">50%</div>
                          </button>
                          <div className="tag5">
                            <div className="best-sale">Best Sale</div>
                          </div>
                        </div>
                      </div>
                      <div className="button5">
                        <img
                          className="wishlist-icon"
                          loading="lazy"
                          alt=""
                          src="/wishlist.svg"
                        />
                        <button className="button6">
                          <div className="add-to-cart18">Add to Cart</div>
                          <input className="frame-input" type="checkbox" />
                        </button>
                        <img className="quick-view-icon3" alt="" />
                      </div>
                    </div>
                    <div className="info18">
                      <div className="chinese-cabbage">Pomme verts</div>
                      <div className="price-wrapper">
                        <div className="price18">
                          <div className="div28">2000</div>
                          <div className="div29">300</div>
                        </div>
                      </div>
                      
                    </div>
                    <div className="hurry-up-offer-ends-in">
                      <div className="hurry-up-offer">
                        Hurry up! Offer ends In:
                      </div>
                      <div className="time">
                        <div className="days">
                          <div className="div30">01</div>
                          <div className="days1">Days</div>
                        </div>
                        <div className="hours">
                          <div className="div31">23</div>
                          <div className="hours1">Hours</div>
                        </div>
                        <div className="div32">:</div>
                        <div className="mins">
                          <div className="div33">34</div>
                          <div className="mins1">Mins</div>
                        </div>
                        <div className="div34">:</div>
                        <div className="secs">
                          <div className="div35">57</div>
                          <div className="secs1">Secs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-5n-parent2">
                <div className="product-5n18">
                  <div className="product-image18">
                    <img
                      className="image-icon19"
                      alt=""
                      src="/image-3@2x.png"
                    />
                  </div>
                  <div className="product-info18">
                    <div className="info19">
                      <div className="green-apple18">Green Lettuce</div>
                      <div className="price19">
                        <div className="div36">200</div>
                      </div>
                    </div>
                   
                    <img
                      className="add-to-cart19"
                      alt=""
                      src="/add-to-cart-1.svg"
                    />
                  </div>
                </div>
                <div className="product-5n19">
                  <div className="product-image19">
                    <img
                      className="image-icon20"
                      alt=""
                      src="/image-4@2x.png"
                    />
                  </div>
                  <div className="product-info19">
                    <div className="info20">
                      <div className="green-apple19">Eggplant</div>
                      <div className="price20">
                        <div className="div37">120</div>
                      </div>
                    </div>
                   
                    <img
                      className="add-to-cart20"
                      alt=""
                      src="/add-to-cart-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-parent">
        <div className="footer">
          <div className="subscribe-our-newsletter">
            <div className="subscribe-our-newsletter-child" />
            <div className="subcribe-our-newsletter-parent">
              <div className="subcribe-our-newsletter">
                Subcribe our Newsletter
              </div>
              <div className="pellentesque-eu-nibh">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </div>
            </div>
            <div className="subscribe">
              <div className="input-field">
                <div className="your-email-address">Your email address</div>
              </div>
              <div className="button7">
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
                  <div className="logo">
                    <div className="plant-1-wrapper">
                      <img
                        className="plant-1-icon"
                        loading="lazy"
                        alt=""
                        src="/plant-1.svg"
                      />
                    </div>
                    <h1 className="ecobazar">{`FarmConnect `}</h1>
                  </div>
                  <div className="morbi-cursus-porttitor">{`Agricultural Products Rural Entrepreneurship Management System: FarmConnect `}</div>
                  <div className="cta">
                    <div className="button8">
                      <div className="div38">(219) 555-0114</div>
                    </div>
                    <div className="or">or</div>
                    <div className="button9">
                      <div className="proxygmailcom">Proxy@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-account-wrapper">
                <div className="my-account">
                  <div className="my-account1">My Account</div>
                  <div className="links">
                    <div className="my-account2">My Account</div>
                    <div className="order-history">Order History</div>
                    <div className="shoping-cart">Shoping Cart</div>
                    <div className="wishlist">Wishlist</div>
                  </div>
                </div>
              </div>
              <div className="help">
                <div className="helps">Helps</div>
                <div className="links1">
                  <div className="contact">Contact</div>
                  <div className="faqs">Faqs</div>
                  <div className="terms-condition">{`Terms & Condition`}</div>
                  <div className="privacy-policy">Privacy Policy</div>
                </div>
              </div>
              <div className="proxy">
                <div className="proxy1">Proxy</div>
                <div className="links2">
                  <div className="about">About</div>
                  <div className="shop">Shop</div>
                  <div className="product">Product</div>
                  <div className="track-order">Track Order</div>
                </div>
              </div>
              <div className="categories">
                <div className="categories1">Categories</div>
                <div className="links3">
                  <div className="fruit-vegetables">{`Fruit & Vegetables`}</div>
                  <div className="meat-fish">{`Meat & Fish`}</div>
                  <div className="bread-bakery">{`Bread & Bakery`}</div>
                  <div className="beauty-health">{`Beauty & Health`}</div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="ecobazar-ecommerce">
                Ecobazar eCommerce © 2021. All Rights Reserved
              </div>
              <div className="methodapplepay-parent">
                <img className="methodapplepay-icon" alt="" />
                <img className="methodvisa-icon" alt="" />
                <img className="methoddiscover-icon" alt="" />
                <img className="methodmastercard-icon" alt="" />
                <div className="cart">
                  <div className="base" />
                  <img className="lock-1-icon" alt="" />
                  <div className="secure">Secure</div>
                  <div className="payment">Payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories2">Categories</div>
        <div className="fruits">{`Fruits `}</div>
        <div className="vegetables">Vegetables</div>
        <div className="equipements">Equipements</div>
        <div className="terrain">Terrain</div>
      </section>
    </div>
  );
};

export default BuyersPage;
