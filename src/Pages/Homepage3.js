import { useCallback } from "react";
import "./Homepage.css";

const Homepage = () => {
  const onNavLinksContainerClick = useCallback(() => {
    // Please sync "buyers page" to the project
  }, []);

  const onCartContainerClick = useCallback(() => {
    // Please sync "Panier" to the project
  }, []);

  return (
    <div className="homepage">
      <div className="trusted-organic-food-container">
        <p className="trusted">100% Trusted</p>
        <p className="organic-food-store">Organic Food Store</p>
      </div>
      <div className="check">
        <div className="check-child" />
        <img className="check-1-icon" alt="" src="/check-1.svg" />
      </div>
      <div className="healthy-natural">{`Healthy & natural food for lovers of healthy food.`}</div>
      <div className="check1">
        <div className="check-item" />
        <img className="check-1-icon1" alt="" src="/check-1.svg" />
      </div>
      <div className="every-day-fresh">
        Every day fresh and quality products for you.
      </div>
     
     
      <img className="bg-icon" alt="" src="/bg.svg" />
      <div className="image">
        <img className="image-icon" alt="" src="/image@2x.png" />
        <img className="image-icon1" alt="" src="/image-1@2x.png" />
        <img className="image-icon2" alt="" src="/image-2@2x.png" />
        <img className="image-icon3" alt="" src="/image-3@2x.png" />
      </div>
      <div className="categories">
        <img className="bg-icon1" alt="" src="/bg-1.svg" />
        <div className="categories1">
          <img className="vegetable-icon" alt="" src="/vegetable.svg" />
          <div className="vegetables">Vegetables</div>
          <div className="products">165 Products</div>
        </div>
        <div className="categories2">
          <img className="fruits-1-icon" alt="" src="/fruits-1.svg" />
          <div className="info">
            <div className="fresh-fruit">Fresh Fruit</div>
            <div className="products1">137 Products</div>
          </div>
        </div>
        <div className="categories3">
          <img className="fish-1-icon" alt="" src="/fish-1.svg" />
          <div className="fish">Fish</div>
          <div className="products2">34 Products</div>
        </div>
        <div className="categories4">
          <img className="meat-1-icon" alt="" src="/meat-1.svg" />
          <div className="meat">Meat</div>
          <div className="products3">165 Products</div>
        </div>
        <div className="categories5">
          <img className="soft-drink-1-icon" alt="" src="/softdrink-1.svg" />
          <div className="water-and-drinks">Water and Drinks</div>
          <div className="products4">48 Products</div>
        </div>
        <div className="categories6">
          <img className="snacks-1-icon" alt="" src="/snacks-1.svg" />
          <div className="snacks">Snacks</div>
          <div className="products5">165 Products</div>
        </div>
        <div className="heading">
          <div className="shop-by-top">Shop by Top Categories</div>
          <div className="button1">
            <div className="view-all">View All</div>
            <img className="group-icon1" alt="" src="/group-1.svg" />
          </div>
        </div>
        <img className="aoorw-icon" alt="" src="/aoorw.svg" />
        <img className="aoorw-icon1" alt="" src="/aoorw-1.svg" />
      </div>
      <div className="heading1">
        <div className="featured-products">Featured Products</div>
        <div className="button2">
          <div className="view-all1">View All</div>
          <img className="group-icon2" alt="" src="/group-2.svg" />
        </div>
      </div>
      <div className="product-4x">
        <div className="product-image">
          <img className="image-icon4" alt="" src="/image-4@2x.png" />
        </div>
        <div className="product-info">
          <div className="info1">
            <div className="green-apple">Green Apple</div>
            <div className="price">
              <div className="div">$14.99</div>
              <div className="div1">$20.99</div>
            </div>
          </div>
          
        </div>
        <img className="add-to-cart" alt="" src="/add-to-cart.svg" />
        <div className="tag">
          <div className="sale">Sale</div>
          <div className="div2">50%</div>
        </div>
      </div>
      <div className="product-4x1">
        <div className="product-image1">
          <img className="image-icon5" alt="" src="/image-5@2x.png" />
        </div>
        <div className="product-info1">
          <div className="info2">
            <div className="green-apple1">Chanise Cabbage</div>
            <div className="price1">
              <div className="div3">$14.99</div>
              <div className="div4">$20.99</div>
            </div>
          </div>
         
        </div>
        <img className="add-to-cart1" alt="" src="/add-to-cart.svg" />
      </div>
      <div className="product-4x2">
        <div className="product-image2">
          <img className="image-icon6" alt="" src="/image-6@2x.png" />
        </div>
        <div className="product-info2">
          <div className="info3">
            <div className="green-apple2">Green Capsicum</div>
            <div className="price2">
              <div className="div5">$14.99</div>
              <div className="div6">$20.99</div>
            </div>
          </div>
          
        </div>
        <img className="add-to-cart2" alt="" src="/add-to-cart-2.svg" />
        <div className="add-to-wishlist-parent">
          <img className="add-to-wishlist" alt="" src="/add-to-wishlist.svg" />
          <img className="quick-view-icon" alt="" src="/quick-view.svg" />
        </div>
      </div>
      <div className="product-4x3">
        <div className="product-image3">
          <img className="image-icon7" alt="" src="/image-7@2x.png" />
        </div>
        <div className="product-info3">
          <div className="info4">
            <div className="green-apple3">Ladies Finger</div>
            <div className="price3">
              <div className="div7">$14.99</div>
              <div className="div8">$20.99</div>
            </div>
          </div>
          
        </div>
        <img className="add-to-cart3" alt="" src="/add-to-cart.svg" />
      </div>
      <img className="homepage-child" alt="" src="/group-6.svg" />
      <img
        className="growth-close-up-environmental-icon"
        alt=""
        src="/growthcloseupenvironmentallushnatural-2@2x.png"
      />
      
      <div className="bg">
        <div className="bg1" />
        <img className="top-icon" alt="" src="/top@2x.png" />
        <img className="bg-icon2" alt="" src="/bg-2@2x.png" />
        <div className="tracker">
          <div className="tracker-child" />
          <div className="tracker-item" />
          <div className="tracker-inner" />
        </div>
        <div className="arrow">
          <img className="aoorw-icon2" alt="" src="/aoorw-2.svg" />
          <img className="aoorw-icon3" alt="" src="/aoorw-3.svg" />
        </div>
        <img className="image-icon8" alt="" src="/image-8@2x.png" />
      </div>
      <div className="welcome-to-shopery">Welcome to shopery</div>
      <div className="fresh-healthy-container">
        <p className="fresh-healthy">{`Fresh & Healthy`}</p>
        <p className="organic-food">Organic Food</p>
      </div>
      
      <div className="free-shipping-on">
        Free shipping on all your order. we deliver, you enjoy
      </div>
     
      <header className="navigation">
        <div className="small-one">
          <div className="contact">
            <img className="map-pin-icon" alt="" src="/map-pin.svg" />
            <div className="store-location-lincoln-">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>
          </div>
          <div className="frame-parent">
            <div className="eng-parent">
              <div className="eng">Eng</div>
              <img className="group-icon4" alt="" src="/group-4.svg" />
            </div>
            <div className="usd-parent">
              <div className="usd">USD</div>
              <img className="group-icon5" alt="" src="/group-4.svg" />
            </div>
          </div>
        </div>
        <div className="midle">
          <div className="nav-links">
            <div className="nav-links1">
              <div className="home">Home</div>
              <img
                className="chevron-down-icon"
                alt=""
                src="/chevron-down.svg"
              />
            </div>
            <div className="nav-links2">
              <div className="home1">Shop</div>
              <img
                className="chevron-down-icon1"
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className="nav-links3">
              <div className="home2">Pages</div>
              <img
                className="chevron-down-icon2"
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className="nav-links4">
              <div className="home3">Blog</div>
              <img
                className="chevron-down-icon3"
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className="nav-links5">
              <div className="home4">About Us</div>
              <img className="chevron-down-icon4" alt="" />
            </div>
          </div>
          <div className="logo">
            <img className="plant-1-icon" alt="" src="/plant-1.svg" />
            <div className="ecobazar">Ecobazar</div>
          </div>
          
            
            <div className="icons1">
              <img className="search-icon" alt="" src="/search.svg" />
              <img className="heart-icon" alt="" src="/heart.svg" />
              <div className="cart">
                <img className="bag-icon" alt="" src="/bag.svg" />
                <div className="no">
                  <div className="div10">2</div>
                </div>
              </div>
              <img className="user-3-1-icon" alt="" src="/user-3-1.svg" />
            </div>
          
        </div>
      </header>
      <main className="homepage1">
        <section className="navigation-parent">
          <div className="navigation1">
            <div className="small-one1">
              <div className="contact1">
                <img className="map-pin-icon1" alt="" />
                <div className="store-location-lincoln-1">
                  Somewhere in  algeria
                </div>
              </div>
              <div className="frame-group">
                <div className="eng-group">
                  <div className="eng1">Eng</div>
                  <img className="group-icon6" alt="" />
                </div>
                <div className="usd-group">
                  <div className="usd1">DZ</div>
                  <img className="group-icon7" alt="" />
                </div>
              </div>
            </div>
            <div className="midle1">
              <div className="nav-links-wrapper">
                <div className="nav-links6">
                  <div
                    className="nav-links7"
                    onClick={onNavLinksContainerClick}
                  >
                    <div className="home5">Home</div>
                    <div className="chevron-down-wrapper">
                      <img
                        className="chevron-down-icon5"
                        alt=""
                        src="/chevron-down.svg"
                      />
                    </div>
                  </div>
                  <div className="nav-links8">
                    <div className="home6">Shop</div>
                    <div className="chevron-down-container">
                      <img
                        className="chevron-down-icon6"
                        alt=""
                        src="/chevron-down-1.svg"
                      />
                    </div>
                  </div>
                  <div className="nav-links9">
                    <div className="home7">Pages</div>
                    <div className="chevron-down-frame">
                      <img
                        className="chevron-down-icon7"
                        alt=""
                        src="/chevron-down-1.svg"
                      />
                    </div>
                  </div>
                  <div className="nav-links10">
                    <div className="home8">Blog</div>
                    <div className="frame-div">
                      <img
                        className="chevron-down-icon8"
                        alt=""
                        src="/chevron-down-1.svg"
                      />
                    </div>
                  </div>
                  <div className="nav-links11">
                    <div className="home9">About Us</div>
                    <img className="chevron-down-icon9" alt="" />
                  </div>
                </div>
              </div>
              <div className="logo1">
                <div className="plant-1-wrapper">
                  <img className="plant-1-icon1" alt="" src="/plant-1.svg" />
                </div>
                <h1 className="ecobazar1">{`FarmConnect `}</h1>
              </div>
              <div className="icons-wrapper">
                <div className="icons2">
                  <div className="call-now1">
                    <img
                      className="phonecall-1-icon1"
                      alt=""
                      src="/phonecall-1.svg"
                    />
                    <div className="edge-connections">
                      <div className="div11">9430144469</div>
                    </div>
                  </div>
                  <div className="icons3">
                    <div className="subgraphs">
                      <img className="search-icon1" alt="" src="/search.svg" />
                    </div>
                    <img className="heart-icon1" alt="" />
                    <div className="cart1" onClick={onCartContainerClick}>
                      <img className="bag-icon1" alt="" src="/bag.svg" />
                      <div className="no1">
                        <div className="shortest-paths">2</div>
                      </div>
                    </div>
                    <div className="subgraphs1">
                      <img
                        className="user-3-1-icon1"
                        alt=""
                        src="/user-3-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg2">
            <div className="bg3" />
            <img className="bg-icon3" alt="" src="/bg-2@2x.png" />
            <div className="depth-first-search">
              <img className="image-icon9" alt="" src="/image-8@2x.png" />
              <div className="floyd-warshall-algorithm">
                <div className="graph-theory">
                  <div className="topological-sorting">
                    <div className="bienvenue-farmconnect">
                      bienvenue à FarmCONNECT
                    </div>
                  </div>
                  <div className="weak-connectivity">
                    <h1 className="frais-et-sain-container">
                      <p className="frais-et-sain">Frais et sain</p>
                      <p className="produits-de-la">PRODUITS DE LA FERME</p>
                    </h1>
                    <div className="undirected-graphs">
                      <button className="button4">
                        <div className="normal2">Shop now</div>
                        <div className="simple-graphs">
                          <img
                            className="group-icon8"
                            alt=""
                            src="/group-3.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="arrow1">
              <img className="aoorw-icon4" alt="" src="/aoorw-2.svg" />
              <img className="aoorw-icon5" alt="" src="/aoorw-3.svg" />
            </div>
            <div className="description" />
            <div className="articulation-points">
              <div className="tracker1">
                <div className="cut-vertices" />
                <div className="cut-vertices1" />
                <div className="cut-vertices2" />
              </div>
            </div>
          </div>
          <div className="graph-traversal">
            <div className="feature5">
              <div className="feature6">
                <button className="icon4">
                  <img
                    className="delivery-truck-1-icon1"
                    alt=""
                    src="/deliverytruck-1.svg"
                  />
                </button>
                <div className="info9">
                  <div className="free-shipping1">Free Shipping</div>
                  <div className="free-shipping-with1">
                    Free shipping with discount
                  </div>
                </div>
              </div>
              <div className="feature7">
                <button className="icon5">
                  <img
                    className="headphones-1-icon1"
                    alt=""
                    src="/headphones-1.svg"
                  />
                </button>
                <div className="info10">
                  <div className="great-support-2471">Great Support 24/7</div>
                  <div className="instant-access-to1">
                    Instant access to Contact
                  </div>
                </div>
              </div>
              <div className="feature8">
                <button className="icon6">
                  <img
                    className="shopping-bag-icon1"
                    alt=""
                    src="/shoppingbag.svg"
                  />
                </button>
                <div className="info11">
                  <div className="sucure-payment1">100% Sucure Payment</div>
                  <div className="we-ensure-your1">
                    We ensure your money is save
                  </div>
                </div>
              </div>
              <div className="feature9">
                <button className="icon7">
                  <img className="package-icon1" alt="" src="/package.svg" />
                </button>
                <div className="info12">
                  <div className="money-back-guarantee1">
                    Money-Back Guarantee
                  </div>
                  <div className="days-money-back1">30 days money-back</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="frame-container">
          <div className="frame-parent1">
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/group-6.svg"
            />
            <div className="frame-wrapper">
              <div className="heading-parent">
                <div className="heading2">
                  <h1 className="featured-products1">Featured Products</h1>
                  <div className="button-wrapper">
                    <button className="button5">
                      <div className="view-all2">View All</div>
                      <div className="group-wrapper">
                        <img
                          className="group-icon9"
                          alt=""
                          src="/group-2.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="product-4x-parent">
                  <div className="product-4x4">
                    <div className="product-image-parent">
                      <div className="product-image4">
                        <img
                          className="image-icon10"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <button className="tag1">
                        <div className="sale1">Sale</div>
                        <div className="div12">50%</div>
                      </button>
                    </div>
                    <div className="product-info4">
                      <div className="info13">
                        <div className="green-apple4">Green Apple</div>
                        <div className="price4">
                          <div className="div13">199</div>
                          <div className="div14" />
                        </div>
                      </div>
                   
                      <img
                        className="add-to-cart4"
                        alt=""
                        src="/add-to-cart.svg"
                      />
                    </div>
                  </div>
                  <div className="product-4x5">
                    <div className="product-image5">
                      <img
                        className="image-icon11"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className="product-info5">
                      <div className="info14">
                        <div className="green-apple5">Chanise Cabbage</div>
                        <div className="price5">
                          <div className="div15">149</div>
                          <div className="div16">$20.99</div>
                        </div>
                      </div>
                   
                      <img
                        className="add-to-cart5"
                        alt=""
                        src="/add-to-cart.svg"
                      />
                    </div>
                  </div>
                  <div className="product-4x6">
                    <div className="product-image6">
                      <img
                        className="image-icon12"
                        alt=""
                        src="/image-6@2x.png"
                      />
                    </div>
                    <div className="product-info6">
                      <div className="info15">
                        <div className="green-apple6">Green Capsicum</div>
                        <div className="price6">
                          <div className="div17">14.99</div>
                          <div className="div18">$20.99</div>
                        </div>
                      </div>
                      
                      <img
                        className="add-to-cart6"
                        alt=""
                        src="/add-to-cart-2.svg"
                      />
                    </div>
                    <img className="product-4x-child" alt="" />
                  </div>
                  <div className="product-4x7">
                    <div className="product-image7">
                      <img
                        className="image-icon13"
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                    <div className="product-info7">
                      <div className="info16">
                        <div className="green-apple7">Ladies Finger</div>
                        <div className="price7">
                          <div className="div19">14.99</div>
                          <div className="div20">$20.99</div>
                        </div>
                      </div>
                    
                      <img
                        className="add-to-cart7"
                        alt=""
                        src="/add-to-cart.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="categories7">
            <div className="categories-inner">
              <div className="bg-parent">
                <img className="bg-icon4" alt="" src="/bg-4.svg" />
                <div className="heading3">
                  <h1 className="shop-by-top1">Shop by Top Categories</h1>
                  <div className="button-container">
                    <button className="button6">
                      <div className="view-all3">View All</div>
                      <div className="group-container">
                        <img
                          className="group-icon10"
                          alt=""
                          src="/group-1.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent2">
              <div className="aoorw-wrapper">
                <img className="aoorw-icon6" alt="" src="/aoorw.svg" />
              </div>
              <div className="categories-wrapper">
                <div className="categories8">
                  <div className="vegetable-wrapper">
                    <img
                      className="vegetable-icon1"
                      alt=""
                      src="/vegetable.svg"
                    />
                  </div>
                  <div className="branch-conditional">
                    <div className="vegetables1">Vegetables</div>
                    <div className="products6">165 Products</div>
                  </div>
                </div>
              </div>
              <div className="categories9">
                <div className="fruits-1-wrapper">
                  <img className="fruits-1-icon1" alt="" src="/fruits-1.svg" />
                </div>
                <div className="info17">
                  <div className="fresh-fruit1">Fresh Fruit</div>
                  <div className="products7">137 Products</div>
                </div>
              </div>
              <div className="categories-parent">
                <div className="categories10">
                  <div className="fish-1-wrapper">
                    <img className="fish-1-icon1" alt="" src="/fish-1.svg" />
                  </div>
                  <div className="fish-parent">
                    <div className="fish1">Fish</div>
                    <div className="products8">34 Products</div>
                  </div>
                </div>
                <div className="categories11">
                  <div className="meat-1-wrapper">
                    <img className="meat-1-icon1" alt="" src="/meat-1.svg" />
                  </div>
                  <div className="meat-parent">
                    <div className="meat1">Meat</div>
                    <div className="products9">165 Products</div>
                  </div>
                </div>
                <div className="categories12">
                  <div className="soft-drink-1-wrapper">
                    <img
                      className="soft-drink-1-icon1"
                      alt=""
                      src="/softdrink-1.svg"
                    />
                  </div>
                  <div className="water-and-drinks-parent">
                    <div className="water-and-drinks1">Water and Drinks</div>
                    <div className="products10">48 Products</div>
                  </div>
                </div>
                <div className="categories13">
                  <div className="snacks-1-wrapper">
                    <img
                      className="snacks-1-icon1"
                      alt=""
                      src="/snacks-1.svg"
                    />
                  </div>
                  <div className="snacks-parent">
                    <div className="snacks1">Snacks</div>
                    <div className="products11">165 Products</div>
                  </div>
                </div>
              </div>
              <div className="aoorw-container">
                <img className="aoorw-icon7" alt="" src="/aoorw-1.svg" />
              </div>
            </div>
            <img
              className="growth-close-up-environmental-icon1"
              loading="lazy"
              alt=""
              src="/growthcloseupenvironmentallushnatural-2@2x.png"
            />
          </div>
        </section>
        <img
          className="growth-close-up-environmental-icon2"
          alt=""
          src="/growthcloseupenvironmentallushnatural-5@2x.png"
        />
        
        <section className="floating-panels">
          <img className="bg-icon5" alt="" />
          <img className="icon8" alt="" src="/1-84@2x.png" />
        </section>
        <section className="homepage-inner">
          <div className="bannar-parent">
            <div className="bannar">
              <img className="image-icon14" alt="" src="/image-14@2x.png" />
              <div className="info18">
                <div className="info19">
                  <div className="heading4">
                    <div className="organic">100% Organic</div>
                    <h1 className="fruit-vegetable">{`Fruit & Vegetable`}</h1>
                  </div>
                  <div className="sale2">
                    <div className="starting-at">Starting at:</div>
                    <div className="div22">
                      <div className="div23">$11.99</div>
                    </div>
                  </div>
                </div>
                <div className="button10">
                  <div className="shop-now">Shop Now</div>
                  <img className="group-icon11" alt="" />
                </div>
              </div>
            </div>
            <div className="bannar1">
              <img className="image-icon15" alt="" src="/image-15@2x.png" />
              <div className="info20">
                <div className="info21">
                  <div className="header">
                    <div className="sale-off-the">sale off the week</div>
                    <h1 className="sales-of-the">Sales of the Year</h1>
                  </div>
                  <div className="timer">
                    <div className="parent">
                      <div className="div24">00</div>
                      <div className="days">Days</div>
                    </div>
                    <div className="div25">:</div>
                    <div className="group">
                      <div className="div26">02</div>
                      <div className="hours">Hours</div>
                    </div>
                    <div className="div27">:</div>
                    <div className="container">
                      <div className="div28">18</div>
                      <div className="mins">Mins</div>
                    </div>
                    <div className="div29">:</div>
                    <div className="parent1">
                      <div className="div30">46</div>
                      <div className="secs">Secs</div>
                    </div>
                  </div>
                </div>
                <div className="button11">
                  <div className="shop-now1">Shop Now</div>
                  <img className="group-icon12" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="frame-section">
          <img className="icon9" alt="" src="/1-902@2x.png" />
          <div className="frame-parent3">
            <div className="frame-wrapper1">
              <img className="frame-item" alt="" />
            </div>
            <div className="heading-group">
              <div className="heading5">
                <h1 className="best-seller-products">Best Seller Products</h1>
                <div className="button-frame">
                  <div className="button12">
                    <div className="view-all4">View All</div>
                    <div className="group-frame">
                      <img className="group-icon13" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-5x-parent">
                <div className="products-5x">
                  <div className="image1">
                    <img
                      className="image-icon16"
                      alt=""
                      src="/image-16@2x.png"
                    />
                    <div className="add-to-wishlist-group">
                      <img className="add-to-wishlist1" alt="" />
                      <img className="quick-view-icon1" alt="" />
                    </div>
                  </div>
                  <div className="product-info8">
                    <div className="info22">
                      <div className="green-apple8">Green Apple</div>
                      <div className="price8">
                        <div className="div31">$14.99</div>
                      </div>
                    </div>
                    
                    <img className="add-to-cart8" alt="" />
                  </div>
                  <div className="tag2">
                    <div className="sale3">Sale</div>
                    <div className="div32">50%</div>
                  </div>
                </div>
                <div className="products-5x1">
                  <div className="image2">
                    <img
                      className="image-icon17"
                      alt=""
                      src="/image-17@2x.png"
                    />
                  </div>
                  <div className="product-info9">
                    <div className="info23">
                      <div className="green-apple9">Chanise Cabbage</div>
                      <div className="price9">
                        <div className="div33">$14.99</div>
                      </div>
                    </div>
                   
                    <img className="add-to-cart9" alt="" />
                  </div>
                  <div className="tag3">
                    <div className="sale4">Sale</div>
                    <div className="div34">50%</div>
                  </div>
                </div>
                <div className="products-5x2">
                  <div className="image3">
                    <img
                      className="image-icon18"
                      alt=""
                      src="/image-18@2x.png"
                    />
                  </div>
                  <div className="product-info10">
                    <div className="info24">
                      <div className="green-apple10">Green Lettuce</div>
                      <div className="price10">
                        <div className="div35">$14.99</div>
                      </div>
                    </div>
                    
                    <img className="add-to-cart10" alt="" />
                  </div>
                  <div className="tag4">
                    <div className="sale5">Sale</div>
                    <div className="div36">50%</div>
                  </div>
                </div>
                <div className="products-5x3">
                  <div className="image4">
                    <img
                      className="image-icon19"
                      alt=""
                      src="/image-19@2x.png"
                    />
                    <div className="add-to-wishlist-container">
                      <img className="add-to-wishlist2" alt="" />
                      <img className="quick-view-icon2" alt="" />
                    </div>
                  </div>
                  <div className="product-info11">
                    <div className="info25">
                      <div className="green-apple11">Green Chili</div>
                      <div className="price11">
                        <div className="div37">$14.99</div>
                      </div>
                    </div>
                 
                    <img className="add-to-cart11" alt="" />
                  </div>
                  <div className="tag5">
                    <div className="sale6">Sale</div>
                    <div className="div38">50%</div>
                  </div>
                </div>
                <div className="products-5x4">
                  <div className="image5">
                    <img
                      className="image-icon20"
                      alt=""
                      src="/image-20@2x.png"
                    />
                  </div>
                  <div className="product-info12">
                    <div className="info26">
                      <div className="green-apple12">Corn</div>
                      <div className="price12">
                        <div className="div39">$14.99</div>
                      </div>
                    </div>
                    
                    <img className="add-to-cart12" alt="" />
                  </div>
                  <div className="tag6">
                    <div className="sale7">Sale</div>
                    <div className="div40">50%</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent4">
                <div className="hot-deals-parent">
                  <h2 className="hot-deals">Hot Deals</h2>
                  <div className="product1">
                    <div className="image6">
                      <img
                        className="image-icon21"
                        alt=""
                        src="/image-21@2x.png"
                      />
                    </div>
                    <div className="product-info13">
                      <div className="info27">
                        <div className="chanise-cabbage">Green Apple</div>
                        <div className="price13">
                          <div className="div41">$14.99</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="product-parent">
                    <div className="product2">
                      <div className="image7">
                        <img
                          className="image-icon22"
                          alt=""
                          src="/image-22@2x.png"
                        />
                      </div>
                      <div className="product-info14">
                        <div className="chanise-cabbage1">Indian Malta</div>
                        <div className="add-to-cart-parent">
                          <img className="add-to-cart13" alt="" />
                          <img className="quick-view-icon3" alt="" />
                          <img className="add-to-wishlist3" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper2">
                      <div className="add-to-cart-group">
                        <img className="add-to-cart14" alt="" />
                        <img className="quick-view-icon4" alt="" />
                        <img className="add-to-wishlist4" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="product3">
                    <div className="image8">
                      <img
                        className="image-icon23"
                        alt=""
                        src="/image-23@2x.png"
                      />
                    </div>
                    <div className="product-info15">
                      <div className="info28">
                        <div className="chanise-cabbage2">Green Lettuce</div>
                        <div className="price14">
                          <div className="data-hub">$14.99</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="best-seller">
                  <h2 className="best-seller1">Best Seller</h2>
                  <div className="product4">
                    <div className="image9">
                      <img
                        className="image-icon24"
                        alt=""
                        src="/image-24@2x.png"
                      />
                    </div>
                    <div className="product-info16">
                      <div className="info29">
                        <div className="chanise-cabbage3">Eggplant</div>
                        <div className="price15">
                          <div className="div42">$14.99</div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="product5">
                    <div className="image10">
                      <img
                        className="image-icon25"
                        alt=""
                        src="/image-25@2x.png"
                      />
                    </div>
                    <div className="product-info17">
                      <div className="info30">
                        <div className="chanise-cabbage4">Red Capsicum</div>
                        <div className="price16">
                          <div className="div43">$14.99</div>
                          <div className="div44">$20.99</div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="product6">
                    <div className="image11">
                      <img
                        className="image-icon26"
                        alt=""
                        src="/image-26@2x.png"
                      />
                    </div>
                    <div className="product-info18">
                      <div className="info31">
                        <div className="chanise-cabbage5">Red Tomatos</div>
                        <div className="price17">
                          <div className="div45">$14.99</div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="top-rated">
                  <h2 className="top-rated1">Top Rated</h2>
                  <div className="product7">
                    <div className="image12">
                      <img
                        className="image-icon27"
                        alt=""
                        src="/image-27@2x.png"
                      />
                    </div>
                    <div className="product-info19">
                      <div className="info32">
                        <div className="chanise-cabbage6">Big Potatos</div>
                        <div className="price18">
                          <div className="div46">$14.99</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="product8">
                    <div className="image13">
                      <img
                        className="image-icon28"
                        alt=""
                        src="/image-28@2x.png"
                      />
                    </div>
                    <div className="product-info20">
                      <div className="info33">
                        <div className="chanise-cabbage7">Corn</div>
                        <div className="price19">
                          <div className="div47">$14.99</div>
                          <div className="div48">$20.99</div>
                        </div>
                      </div>
                   
                    </div>
                  </div>
                  <div className="product9">
                    <div className="image14">
                      <img
                        className="image-icon29"
                        alt=""
                        src="/image-29@2x.png"
                      />
                    </div>
                    <div className="product-info21">
                      <div className="info34">
                        <div className="chanise-cabbage8">
                          Fresh cauliflower
                        </div>
                        <div className="price20">
                          <div className="div49">$14.99</div>
                        </div>
                      </div>
                   
                    </div>
                  </div>
                </div>
                <div className="bannar2">
                  <img
                    className="spacing-manager-icon"
                    alt=""
                    src="/spacing-manager@2x.png"
                  />
                  <div className="info35">
                    <div className="rotate-transform">
                      <div className="summer-fruit-collection">HOt Sale</div>
                      <h1 className="starting-at-2399-container">
                        <p className="save-37-on">
                          <span className="save-37">Save 37%</span>
                          <span> on</span>
                        </p>
                        <p className="every-order">Every Order</p>
                      </h1>
                    </div>
                    <div className="skew-transform">
                      <div className="button13">
                        <div className="shop-now2">Shop Now</div>
                        <div className="stroke-properties">
                          <img className="group-icon14" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lock-properties">
              <img
                className="lock-properties-child"
                alt=""
                src="/group-1-1@2x.png"
              />
            </div>
          </div>
        </section>
        <section className="figma-manager">
          <div className="blog">
            <img className="bg-icon6" alt="" />
            <div className="blog1">Blog</div>
            <h1 className="latest-news">Latest News</h1>
            <div className="exporter">
              <div className="blog2">
                <div className="blog-card">
                  <div className="image15">
                    <img
                      className="image-icon30"
                      alt=""
                      src="/image-30@2x.png"
                    />
                    <div className="date">
                      <div className="locker-wrapper">
                        <div className="locker">18</div>
                      </div>
                      <div className="nov">Nov</div>
                    </div>
                  </div>
                  <div className="info36">
                    <div className="info37">
                      <div className="info38">
                        <div className="categories17">
                          <img className="tag-1-icon" alt="" />
                          <div className="food">Food</div>
                        </div>
                        <div className="admin">
                          <img className="user-3-1-icon2" alt="" />
                          <div className="by-admin">
                            <span>By</span>
                            <span className="admin1"> Admin</span>
                          </div>
                        </div>
                        <div className="comments">
                          <img className="chatcentered-1-icon" alt="" />
                          <div className="comments1">65 Comments</div>
                        </div>
                      </div>
                      <div className="curabitur-porttitor-orci">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                        Nunc fermentum.
                      </div>
                    </div>
                    <div className="button14">
                      <div className="read-more">Read More</div>
                      <img className="arrow-icon" alt="" />
                    </div>
                  </div>
                </div>
                <div className="blog-card1">
                  <div className="image16">
                    <img
                      className="image-icon31"
                      alt=""
                      src="/image-31@2x.png"
                    />
                    <div className="date1">
                      <div className="div50">23</div>
                      <div className="nov1">Jan</div>
                    </div>
                  </div>
                  <div className="info39">
                    <div className="info40">
                      <div className="info41">
                        <div className="categories18">
                          <img className="tag-1-icon1" alt="" />
                          <div className="food1">Food</div>
                        </div>
                        <div className="admin2">
                          <img className="user-3-1-icon3" alt="" />
                          <div className="by-admin1">
                            <span>By</span>
                            <span className="admin3"> Admin</span>
                          </div>
                        </div>
                        <div className="comments2">
                          <img className="chatcentered-1-icon1" alt="" />
                          <div className="comments3">65 Comments</div>
                        </div>
                      </div>
                      <div className="curabitur-porttitor-orci1">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                        Nunc fermentum.
                      </div>
                    </div>
                    <div className="button15">
                      <div className="read-more1">Read More</div>
                      <img className="arrow-icon1" alt="" />
                    </div>
                  </div>
                </div>
                <div className="blog-card2">
                  <div className="image17">
                    <img
                      className="image-icon32"
                      alt=""
                      src="/image-32@2x.png"
                    />
                    <div className="date2">
                      <div className="wrapper">
                        <div className="div51">18</div>
                      </div>
                      <div className="nov2">Nov</div>
                    </div>
                  </div>
                  <div className="info42">
                    <div className="info43">
                      <div className="info44">
                        <div className="categories19">
                          <img className="tag-1-icon2" alt="" />
                          <div className="food2">Food</div>
                        </div>
                        <div className="admin4">
                          <img className="user-3-1-icon4" alt="" />
                          <div className="by-admin2">
                            <span>By</span>
                            <span className="admin5"> Admin</span>
                          </div>
                        </div>
                        <div className="comments4">
                          <img className="chatcentered-1-icon2" alt="" />
                          <div className="comments5">65 Comments</div>
                        </div>
                      </div>
                      <div className="curabitur-porttitor-orci2">
                        Curabitur porttitor orci eget neque accumsan venenatis.
                        Nunc fermentum.
                      </div>
                    </div>
                    <div className="button16">
                      <div className="read-more2">Read More</div>
                      <img className="arrow-icon2" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-organizer">
            <div className="testimonials-parent">
              <div className="testimonials">
                <div className="heading6">
                  <div className="testimonial-parent">
                    <div className="testimonial">Testimonial</div>
                    <h1 className="what-our-customer">
                      What Our Customer Says
                    </h1>
                  </div>
                  <div className="heading-inner">
                    <div className="aoorw-parent">
                      <img className="aoorw-icon8" alt="" />
                      <img className="aoorw-icon9" alt="" />
                    </div>
                  </div>
                </div>
                <div className="testimonials-inner">
                  <div className="bg-group">
                    <img className="bg-icon7" alt="" />
                    <div className="testimonial1">
                      <div className="testimonial-card">
                        <img className="vector-icon" alt="" />
                        <div className="pellentesque-eu-nibh1">
                          Pellentesque eu nibh eget mauris congue mattis mattis
                          nec tellus. Phasellus imperdiet elit eu magna dictum,
                          bibendum cursus velit sodales. Donec sed neque eget
                        </div>
                        <div className="client">
                          <div className="reviewer">
                            <img
                              className="image-icon33"
                              alt=""
                              src="/image-33@2x.png"
                            />
                            <div className="info45">
                              <div className="robert-fox">Robert Fox</div>
                              <div className="customer">Customer</div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="testimonial-card1">
                        <img className="vector-icon1" alt="" />
                        <div className="pellentesque-eu-nibh2">
                          Pellentesque eu nibh eget mauris congue mattis mattis
                          nec tellus. Phasellus imperdiet elit eu magna dictum,
                          bibendum cursus velit sodales. Donec sed neque eget
                        </div>
                        <div className="client1">
                          <div className="reviewer1">
                            <img
                              className="image-icon34"
                              alt=""
                              src="/image-34@2x.png"
                            />
                            <div className="info46">
                              <div className="robert-fox1">Dianne Russell</div>
                              <div className="customer1">Customer</div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="testimonial-card2">
                        <img className="vector-icon2" alt="" />
                        <div className="pellentesque-eu-nibh3">
                          Pellentesque eu nibh eget mauris congue mattis mattis
                          nec tellus. Phasellus imperdiet elit eu magna dictum,
                          bibendum cursus velit sodales. Donec sed neque eget
                        </div>
                        <div className="client2">
                          <div className="reviewer2">
                            <img
                              className="image-icon35"
                              alt=""
                              src="/image-35@2x.png"
                            />
                            <div className="info47">
                              <div className="robert-fox2">Eleanor Pena</div>
                              <div className="customer2">Customer</div>
                            </div>
                          </div>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper3">
                <div className="our-location-parent">
                  <div className="our-location">
                    <img className="icon10" alt="" />
                    <div className="our-location-group">
                      <div className="our-location1">Our Location</div>
                      <div className="thornridge-cir-shiloh">
                        1901 Thornridge Cir. Shiloh, Washington DC 20020, United
                        States
                      </div>
                    </div>
                  </div>
                  <div className="contact-us">
                    <img className="icon11" alt="" />
                    <div className="call-us-247-parent">
                      <div className="call-us-247">Call Us 24/7</div>
                      <div className="div52">(303) 555-0105</div>
                    </div>
                  </div>
                  <div className="subscribe-newsletter">
                    <img className="icon12" alt="" />
                    <div className="subscribe-newsletter-parent">
                      <div className="subscribe-newsletter1">
                        Subscribe Newsletter
                      </div>
                      <div className="input-field-parent">
                        <div className="input-field1">
                          <div className="your-email-address1">
                            Your email address
                          </div>
                        </div>
                        <div className="button17">
                          <div className="normal3">Subscribe</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-logo-wrapper">
              <img className="company-logo-icon" alt="" />
            </div>
          </div>
        </section>
        
      </main>
      <img className="top-icon1" alt="" src="/top@2x.png" />
    </div>
  );
};

export default Homepage;
