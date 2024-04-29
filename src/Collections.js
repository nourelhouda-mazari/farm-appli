import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const db = firebase.firestore();

// Users collection
db.collection('users').doc().set({
  idUser: '',
  age: 0,
  ville: '',
  justificatif: null,
  email: '',
  motDePasseHash: '',
  profession: ''
});

// Agriculteur collection
db.collection('agriculteurs').doc().set({
  idUser: ''
});

// Ingenieur collection
db.collection('ingenieurs').doc().set({
  idUser: '',
  specialite: ''
});

// Commercant collection
db.collection('commercants').doc().set({
  idUser: ''
});

// Consommateur collection
db.collection('consommateurs').doc().set({
  idUser: '',
  justificatif: 'none'
});

// DemandeLocation collection
db.collection('demandeLocations').doc().set({
  codeD: '',
  duree: '',
  equipement: '',
  idLoc: '',
  profession: ''
});

// Equipement collection
db.collection('equipements').doc().set({
  codeE: '',
  prix: 0,
  description: '',
  idOwner: '',
  profession: ''
});

// Tuto collection
db.collection('tutos').doc().set({
  codeT: '',
  vd_img: null,
  url: '',
  description: '',
  idP: '',
  date_p: firebase.firestore.Timestamp.fromDate(new Date()),
  heure: firebase.firestore.Timestamp.fromDate(new Date())
});

// Consulter collection
db.collection('consulter').doc().set({
  codeC: '',
  idUser: '',
  codeT: '',
  likes: 0
});

// Produit collection
db.collection('produits').doc().set({
  codeP: '',
  nom: '',
  description: '',
  prix: 0,
  quantite: 0,
  idVendeur: '',
  profession: ''
});

// Commander collection
db.collection('commander').doc().set({
  codeC: '',
  qte: 0,
  date_C: firebase.firestore.Timestamp.fromDate(new Date()),
  heure: firebase.firestore.Timestamp.fromDate(new Date()),
  valider: 0,
  message: '',
  idCons: '',
  codeP: ''
});
