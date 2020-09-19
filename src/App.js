import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import StockForm from './components/form/stock-form/StockForm';

function App() {
  return (
    <div className="app">
      <Header data-test="header-component" />
      <div className="app__form">
        <StockForm data-test="stock-form-component" />
      </div>

    </div>
  );
}

export default App;
