import React, { useState, useEffect } from 'react';

const MonHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Met à jour chaque seconde

    return () => clearInterval(timer); // Nettoie l'intervalle lorsque le composant est démonté
  }, []);

  const formattedDate = currentTime.toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const formattedTime = currentTime.toLocaleTimeString('fr-FR');

  return (
    <header>
      <h1>{formattedDate}</h1>
      <h2>{formattedTime}</h2>
    </header>
  );
};

export default MonHeader;
