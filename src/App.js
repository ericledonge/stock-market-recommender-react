import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import StockForm from './components/form/stock-form/StockForm';
import Results from './components/results/Results';
import { AppProvider } from './context/appContext';

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Header data-test="header-component" />
        <div className="app__form">
          <StockForm data-test="stock-form-component" />
        </div>
        <Results />
      </AppProvider>
    </div>
  );
}

export default App;
