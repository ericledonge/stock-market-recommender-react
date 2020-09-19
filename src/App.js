import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import StockForm from './components/form/stock-form/StockForm';

function App() {
  return (
    <div>
      <Header data-test="header-component" />
      <StockForm data-test="stock-form-component" />
    </div>
  );
}

export default App;
