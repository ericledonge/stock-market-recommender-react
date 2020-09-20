import React from 'react';
import './StockSymbol.scss';
import appContext from '../../../context/appContext';

const StockSymbol = () => {
  const {
    state: { stock },
  } = appContext.useApp();

  return (
    <div className="stock-symbol">
      <span className="stock-symbol__label">Stock Symbol:</span>
      <span className="stock-symbol__value">{stock}</span>
    </div>
  );
};

export default StockSymbol;
