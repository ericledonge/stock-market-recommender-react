import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import StockForm from './components/form/stock-form/StockForm';
import ResultsContainer from './components/results/results-container/ResultsContainer';
import { AppProvider } from './context/appContext';

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Header data-test="header-component" />
        <div className="app__form">
          <StockForm data-test="stock-form-component" />
        </div>
        <div className="app__results">
          <ResultsContainer />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
