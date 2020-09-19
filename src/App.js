import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import StockForm from './components/stock-form/StockForm';

function App() {
  return (
    <div>
      <Header data-test="header-component" />
      <StockForm />
    </div>
  );
}

export default App;
