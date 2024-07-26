import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import CompClient from './composants/CompClient';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Airport = () => (
  <div>
    <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Med Mùs</li>
    </ul>
  </div>
);

const Cities = () => (
  <div>
    <ul>
      <li>Toulouse</li>
      <li>Brest</li>
      <li>Tunis</li>
    </ul>
  </div>
);

const Courses = () => (
  <div>
    <ul>
      <li><Link to="/cos/techno">Technology</Link></li>
      <li><Link to="/cos/bio">Biologie</Link></li>
      <li><Link to="/cos/meca">Mécanique</Link></li>
    </ul>
    <Switch>
      <Route path="/cos/techno" component={() => <div>Ce sont les Technos</div>} />
      <Route path="/cos/bio" component={() => <div>C'est Bio !</div>} />
      <Route path="/cos/meca" component={() => <div>Mécanique</div>} />
    </Switch>
  </div>
);

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cos">Courses</Link></li>
        <li><Link to="/airports">Aéroports</Link></li>
        <li><Link to="/cities">Villes</Link></li>
        <li><Link to="/saisir-client">Saisir un client</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/airports" component={() => (
          <div><b>Aéroports</b><Airport /></div>
        )} />
        <Route path="/cities" component={Cities} />
        <Route path="/cos" component={Courses} />
        <Route path="/saisir-client" component={CompClient} />
      </Switch>
    </div>
  );
}

export default App;

