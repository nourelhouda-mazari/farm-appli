import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';// Import Link from react-router-dom
import { useState } from "react"; 
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import axios from 'axios';
import { auth } from "../firebase/firebase";

const App = () => {
  const { t } = useTranslation(); 

  const [employees, setEmployees] = useState([/*
    {
      id: 1,
      name: t("Reda"),
      diploma: t("Bachelor's Degree in Computer Science"),
      position: t("Software Engineer"),
      experience: 1,
      image: "",
    },
    {
      id: 2,
      name: t("Samir"),
      diploma: t("Associate's Degree in Graphic Design"),
      position: t("Graphic Designer"),
      experience: 2,
      image: "concombre",
    },
    {
      id: 3,
      name: t("Kamal"),
      diploma: t("Master's Degree in Business Administration"),
      position: t("...."),
      experience: 1,
      image: "",
    },
    {
      id: 4,
      name: t("Mustapha"),
      diploma: t("Bac"),
      position: t("...."),
      experience: 0,
      image: "",
    },
    {
      id: 5,
      name: t("Hassan"),
      diploma: t("bac +1"),
      position: t(".."),
      experience: 0 ,
      image: "",
    },
    {
      id: 6,
      name: t("Ali"),
      diploma: t("Bachelor's Degree "),
      position: t("chommeur"),
      experience: 0 ,
      image: "",
    },
    {
      id: 7,
      name: t("Ahmed"),
      diploma: t("Master's Degree in Education"),
      position: t("student"),
      experience: 2,
      image: "",
    },
    {
      id: 8,
      name: t("Zakaria"),
      diploma: t("Bachelor's Degree "),
      position: t("..."),
      experience: 0 ,
      image: "",
    },
  */]);
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    const fetchJobs = async () => {
      axios.get('http://localhost:3002/job', {
        headers: {
          Authorization: localStorage["token"],
        },
      })
      .then((response) => {
        const ids = Object.keys(response.data);
        if(response.data) setEmployees(Object.values(response.data).map((product, index) => ({...product, id: ids[index]})));
        else setEmployees([]);
      })
      .catch(error => console.error(error))
    }
    fetchJobs()
  },[])

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteemployee = (employee) => {
    axios.delete("http://localhost:3002/job/"+employee.id, {
      headers: {
        Authorization: localStorage["token"],
      },
    })
    .then((response) => {
      setEmployees(employees.filter((p) => p.id !== employee.id));
    })
    .catch(error => console.error(error))
  };

  const renderEmployees = () => {
    return (
      <div className="row">
        {employees.map((employee, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img
                alt={employee.job}
                className="card-img-top"
                src={employee.link}
              />
              <div className="card-body">
                <h5 className="card-title">{employee.user?.name}</h5>
                <p className="card-text">{employee.description}</p>
                <p className="card-text">{employee.job}</p>
                <p className="card-text">{t("Experience")}: {employee.experience} {t("years")}</p>
                <div className="d-flex justify-content-end align-items-center">
                  {auth.currentUser?.uid === employee.user?.uid?
                  <button className="btn btn-danger" onClick={()=> deleteemployee(employee, index)}>
                    Supprimer
                  </button> : <button
                    onClick={() => addToCart(employee)}
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
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="w-full py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight text-center md:text-left">
                 {t('Employée')}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
                {t('besoin de nouveau employee on  a la solution pour vous')}
              </p>
            </div>
          </div>
          <div className="mt-8">
            {renderEmployees()}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;