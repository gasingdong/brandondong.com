import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/ProjectsPage';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
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
