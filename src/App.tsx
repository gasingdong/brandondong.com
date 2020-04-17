import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
