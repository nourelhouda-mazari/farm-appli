import React from 'react';
import { Link } from 'react-router-dom';// Import Link from react-router-dom
import { useState } from "react"; 
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import tracteur from '../Images/tracteur.jpg';
import souffleur from '../Images/souffleur.jpg';
import charrues from '../Images/charrues.jpg';
import semoir from '../Images/semoir.jpg';
import faucheuse from '../Images/faucheuse.jpg';
import moissonneuse from '../Images/Moissonneuse-batteuse.jpg';
import epandeur from '../Images/Epandeur.jpg';
import arrosage from '../Images/arrosage.jpg';
const App = () => {
  const { t } = useTranslation(); 

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'tracteur',
      price: 25000,
      description: t("Used for plowing and cultivating soil."), // French for "Used for plowing and cultivating soil."
      image: tracteur,
    },
    
    {
      id: 2,
      name: 'Souffleur',
      price: 150000,
      description: t("Used for blowing leaves and debris."), // French for "Used for blowing leaves and debris."
      image: souffleur,
    },
    {
      id: 3,
      name: 'Charrues',
      price: 20000,
      description: t("Used for turning and breaking up soil."), // French for "Used for turning and breaking up soil."
      image: charrues ,
    },
    {
      id: 4,
      name: 'Semoir',
      price: 30000,
      description: t("Used for sowing seeds."), // French for "Used for sowing seeds."
      image: semoir,
    },
    {
      id: 5,
      name: 'Faucheuse',
      price: 200000,
      description: t("Used for cutting grass or crops."), // French for "Used for cutting grass or crops."
      image: faucheuse ,
    },
    {
      id: 6,
      name: 'Moissonneuse-batteuse',
      price: 25000,
      description: t("Used for harvesting and threshing crops."), // French for "Used for harvesting and threshing crops."
      image: moissonneuse ,
    },
    {
      id: 7,
      name: 'Epandeur',
      price: 20000,
      description: t("Used for spreading fertilizer or seeds."), // French for "Used for spreading fertilizer or seeds."
      image: epandeur ,
    },
    {
      id: 8,
      name: 'Arrosage automatique',
      price: 30000,
      description: t("Used for compressing hay or straw into bales."), // French for "Used for compressing hay or straw into bales."
      image: arrosage,
    },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const renderProducts = () => {
    return (
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                alt={product.name}
                className="card-img-top"
                src={product.image}
              />
              <div className="card-body">
                <h5 className="card-title">{(product.name)}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{t("price")}:{product.price} {("Da")}</p> {/* Displaying the price */}
                <div className="d-flex justify-content-end align-items-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-success"
                  >
                    {t("Add to Cart")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="w-full py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 bg-green-100 p-8 rounded-lg">
              <div className="grid gap-1">
                <h1 className="text-2xl font-bold tracking-tight text-center md:text-left text-green-800">
                  {t('equipements')}
                </h1>
                <p className="text-green-700 dark:text-gray-400 text-center md:text-left">
                  {t('A louer et a vendre')}
                </p>
              </div>
            </div>

          <div className="mt-8">
            {renderProducts()}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;