import React, { useState } from 'react';

const CompClient = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [infosVisualisees, setInfosVisualisees] = useState(null);

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleDateNaissanceChange = (e) => {
    setDateNaissance(e.target.value);
  };

  const handleValidation = () => {
    if (!nom || !prenom || !dateNaissance) {
      alert('Tous les champs sont obligatoires');
      return;
    }

    if (nom.length < 2 || nom.length > 40) {
      alert('Le nom doit avoir entre 2 et 40 caractères');
      return;
    }

    if (prenom.length < 2 || prenom.length > 30) {
      alert('Le prénom doit avoir entre 2 et 30 caractères');
      return;
    }

    const date = new Date(dateNaissance);
    if (date < new Date('1950-01-01')) {
      alert('La date de naissance doit être après le 01/01/1950');
      return;
    }

    // Valider les caractères
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(nom) || !regex.test(prenom)) {
      alert('Le nom et le prénom ne doivent contenir que des lettres et des espaces');
      return;
    }

    alert('Informations validées');
  };

  const handleVisualisation = () => {
    setInfosVisualisees({ nom, prenom, dateNaissance });
  };

  return (
    <div>
      <h2>Saisir un client</h2>
      <form>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            value={nom}
            onChange={handleNomChange}
            maxLength="40"
            minLength="2"
            required
          />
        </div>
        <div>
          <label>Prénom:</label>
          <input
            type="text"
            value={prenom}
            onChange={handlePrenomChange}
            maxLength="30"
            minLength="2"
            required
          />
        </div>
        <div>
          <label>Date de Naissance:</label>
          <input
            type="date"
            value={dateNaissance}
            onChange={handleDateNaissanceChange}
            min="1950-01-01"
            required
          />
        </div>
        <button type="button" onClick={handleValidation}>Valider</button>
        <button type="button" onClick={handleVisualisation}>Visualiser les infos</button>
      </form>
      {infosVisualisees && (
        <div>
          <h3>Informations saisies:</h3>
          <p>Nom: {infosVisualisees.nom}</p>
          <p>Prénom: {infosVisualisees.prenom}</p>
          <p>Date de Naissance: {infosVisualisees.dateNaissance}</p>
        </div>
      )}
    </div>
  );
};

export default CompClient;

