import React, { useEffect, useState } from 'react';
import '../Styles/AddProductForm.css';
import Navigation from '../Components/Navigation';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';

function AddProductForm() {
  const [category, setCategory] = useState('');
  const [qte, setQte] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [lieu, setLieu] = useState('');
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [NP, setNP] = useState('');
  const [Exp, setExp] = useState('');
  const [role, setRole] = useState(localStorage["role"] || '');
  const navigate = useNavigate();

  useEffect(() => {
    setPrix('');
    setQte('');
    setDescription('');
    setLieu('');
    setFile();
    setName('');
    setNP('');
    setExp('');

  }, [category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(category === "emploi") {
        axios.post('http://localhost:3002/job/post', {
            description: NP,
            experience: Exp,
            job: description,
            location: lieu,
        }, {
            headers: {
                Authorization: localStorage["token"],
            }
        })
        .then((response) => {
            alert("Poste ajouté avec succès");
            navigate('/workforce');
        })
        .catch(error => alert(error.response.data.message || error.response.data || error.message || error.response || error))


    } else if(category === "fruits_legumes") {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('qte', qte);
        formData.append('price', prix);
        formData.append('file', file);

        axios.post('http://localhost:3002/product/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: localStorage["token"],
            }
        })
        .then((response) => {
            alert("Produit ajouté avec succès");
            navigate('/products');
        })
        .catch(error => alert(error.response.data.message || error.response.data || error.message || error.response || error))
    }
    else if(category === "equipement") {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', prix);
        formData.append('file', file);

        axios.post('http://localhost:3002/equipement/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: localStorage["token"],
            }
        })
        .then((response) => {
            alert("Équipement ajouté avec succès");
            navigate('/equipements');
        })
        .catch(error => alert(error.response.data.message || error.response.data || error.message || error.response || error))

    }

  };

  return (<>
        <div>
      <Row>
        <Navigation />
      </Row>
      </div>
    <div className="add-product-form-container">
      <h2>Ajouter un Poste </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Catégorie :
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Select category</option>
            {role !== "commercant" && <option value="emploi">Demande Emploi</option>}
            {role !== "commercant" && <option value="equipement">Équipement</option>}
            <option value="fruits_legumes">Fruits/Légumes</option>
          </select>
        </label>
        {category === 'emploi' && (
            <>
            <label>
                Degree :
                <input type="text" value={NP} onChange={(e) => setNP(e.target.value)} />
            </label>
            <label>
                Description :
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Experience :
                <input type="text" value={Exp} onChange={(e) => setExp(e.target.value)} />
            </label>
            </>
        )}
        {category === 'fruits_legumes' && (
          <>
                  <label>
          Name :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
            <label>
          Description :
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Lieu :
          <input type="text" value={lieu} onChange={(e) => setLieu(e.target.value)} />
        </label>
            <label>
              Quantité :
              <input type="text" value={qte} onChange={(e) => setQte(e.target.value)} />
            </label>
            <label>
              Prix :
              <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
            </label>
            <label>
            Photo :
            <input type="file" value={file?.filename} onChange={(e) => setFile(e.target.files[0])} />
          </label>
          </>
        )}
        
        {category === 'equipement' && (<>
        <label>
          Name :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description :
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Lieu :
          <input type="text" value={lieu} onChange={(e) => setLieu(e.target.value)} />
        </label>
            <label>
            Prix par jour (location) :
            <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
          </label>
            <label>
            Photo :
            <input type="file" value={file?.filename} onChange={(e) => setFile(e.target.files[0])} />
          </label>
          </>)}
        <button type="submit">Ajouter</button>
      </form>
    </div></>
  );
}

export default AddProductForm;