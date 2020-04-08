import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/ProjectsPage';
import About from './components/About';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
