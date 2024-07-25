import React from 'react';

const MonFooter = ({ name, session }) => {
  return (
    <footer>
      <p>Nom : {name}</p>
      <p>Session : {session}</p>
    </footer>
  );
};

export default MonFooter;
