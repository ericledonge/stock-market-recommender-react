import React from 'react';
import { useApp } from '../../../context/appContext';

const StockSymbol = () => {
  const {
    state: { stock },
  } = useApp();

  return (
    <div className="stock-symbol">
      Stock Symbol {stock}
    </div>
  );
};

export default StockSymbol;
