const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app =express()
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'farmconnect'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données : ', err);
      return;
    }
    console.log('Connexion à la base de données MySQL établie.');
  });
app.get('/',(re,res)=> {
    return res.json("From Backen Side");
})

app.listen(8081,()=>{
    console.log("listening");
})