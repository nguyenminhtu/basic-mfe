import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'main',
});

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </Router>
  );
}
