import React from 'react';
import './App.scss';
import Header from './components/header/Header';
// import { StockProvider } from './context/stockContext';
import StockForm from './components/form/stock-form/StockForm';
import Results from './components/results/Results';
// import { DurationProvider } from './context/durationContext';
import { AppProvider } from './context/appContext';

function App() {
  return (
    <div className="app">
      {/*<StockProvider>*/}
      {/*  <DurationProvider>*/}
      <AppProvider>
        <Header data-test="header-component" />
        <StockForm data-test="stock-form-component" />
        <Results />
      </AppProvider>
      {/*  </DurationProvider>*/}
      {/*</StockProvider>*/}
    </div>
  );
}

export default App;
