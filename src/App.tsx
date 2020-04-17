import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Content />
      </div>
    </Router>
  );
};

export default App;
