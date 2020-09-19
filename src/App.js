import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import { StockProvider } from './context/stockContext';
import StockForm from './components/form/stock-form/StockForm';
import Results from './components/results/Results';

function App() {
  return (
    <div className="app">
      <StockProvider>
        <Header data-test="header-component" />
        <StockForm data-test="stock-form-component" />
        <Results />
      </StockProvider>
    </div>
  );
}

export default App;
