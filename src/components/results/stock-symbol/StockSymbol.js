import React from 'react';
import appContext from '../../../context/appContext';

const StockSymbol = () => {
  const {
    state: { stock },
  } = appContext.useApp();

  return (
    <div className="stock-symbol">
      Stock Symbol {stock}
    </div>
  );
};

export default StockSymbol;
