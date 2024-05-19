import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { db } from '../firebase/firebase'; // Import Firebase

import Navigation from '../Components/Navigation';
import Footer from '../Components/footer'; // Corrected import statement
import { auth } from "../firebase/firebase";

// import laitue from '../Images/laitue.jpg';
// import banane from '../Images/banane.jpg';
// import concombre from '../Images/concombre.jpg';
// import brocoli from '../Images/brocoli.jpg';
// import pomme from '../Images/toufa7.jpg';
// import carotte from '../Images/carotte.jpg';
// import patates from '../Images/patates.png';
// import orange from '../Images/orange.png';
import axios from 'axios';

const App = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();

  const [products, setProducts] = useState([/*
    {
      id: 1,
      name: t("Laitue"),
      price: 50,
      description: t("Base de salade fraîche et croquante."),
      image: laitue,
    },
    {
      id: 2,
      name: t("Concombres"),
      price: 75,
      description: t("Ajout croquant et rafraîchissant aux salades et sandwichs."),
      image: concombre,
    },
    {
      id: 3,
      name: t("Bananes"),
      price: 100,
      description: t("En-cas pratique et sucré."),
      image: banane,
    },
    {
      id: 4,
      name: t("Pommes de terre"),
      price: 150,
      description: t("Légume racine polyvalent, idéal pour de nombreux plats."),
      image: patates,
    },
    {
      id: 5,
      name: t("Oranges"),
      price: 120,
      description: t("Fruit citrique riche en vitamine C et en saveur."),
      image: orange,
    },
    {
      id: 6,
      name: t("Carottes"),
      price: 200,
      description: t("Légume racine croquant et riche en nutriments."),
      image: carotte,
    },
    {
      id: 7,
      name: t("Pommes"),
      price: 250,
      description: t("Délicieuses et juteuses."),
      image: pomme,
    },
    {
      id: 8,
      name: t("Brocoli"),
      price: 150,
      description: t("Superaliment nutritif."),
      image: brocoli,
    },
  */]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      // const snapshot = await db.collection("cart").get();
      // const items = snapshot.docs.map((doc) => doc.data());
      // setCartItems(items);
    };

    const fetchProducts = async () => {
      axios.get("http://localhost:3002/product", {
        headers: {
          Authorization: localStorage["token"],
        },
      })
      .then((response) => {
        const ids = Object.keys(response.data);
        if(response.data) setProducts(Object.values(response.data).map((product, index) => ({...product, id: ids[index]})));
        else setProducts([]);
      })
      .catch(error => console.error(error))


    };
    fetchProducts();

    fetchCartItems();
  }, []);

  const addToCart = (product) => {
    navigate("/maain/"+product.author.uid)
  };

  const deleteProduct = (product) => {
    axios.delete("http://localhost:3002/product/"+product.id, {
      headers: {
        Authorization: localStorage["token"],
      },
    })
    .then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
    })
    .catch(error => console.error(error))
  };

  const renderProducts = () => {
    return (
      <div className="row">
        {products && products?.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                alt={product.name}
                className="card-img-top"
                src={product.link}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{t("price")}:{product.price} {t("Da")}</p>
                <div className="d-flex justify-content-end align-items-center">
                  {auth.currentUser?.uid === product.author.uid?
                  <button className="btn btn-danger" onClick={()=> deleteProduct(product, index)}>
                    Supprimer
                  </button> : <button
                    onClick={() => addToCart(product)}
                    className="btn btn-success"
                  >
                    {t("contacter")}
                  </button>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCartItems = () => {
    return (
      <div>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name} - {item.price}</p>
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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight text-center md:text-left">
                 {t('Fruits and Vegetables')}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
                {t('Frais et sains')}
              </p>
            </div>
          </div>
          <div className="mt-8">
            {renderProducts()}
          </div>
          <div className="mt-8">
            <h2>{t('Cart')}</h2>
            {renderCartItems()}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
