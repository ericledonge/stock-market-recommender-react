import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import { StockProvider } from './context/stockContext';
import StockForm from './components/form/stock-form/StockForm';
import Results from './components/results/Results';
import { DurationProvider } from './context/durationContext';

function App() {
  return (
    <div className="app">
      <StockProvider>
        <DurationProvider>
          <Header data-test="header-component" />
          <StockForm data-test="stock-form-component" />
          <Results />
        </DurationProvider>
      </StockProvider>
    </div>
  );
}

export default App;
