import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';

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
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
