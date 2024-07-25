import React from 'react';
import MonHeader from './MonHeader';
import MonBody from './MonBody';
import MonFooter from './MonFooter';

const App = () => {
  const name = "Marwa Braiki";
  const session = "Session 2024";

  return (
    <div className="App">
      <MonHeader />
      <MonBody />
      <MonFooter name={name} session={session} />
    </div>
  );
};

export default App;
