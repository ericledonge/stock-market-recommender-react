import React from 'react';
import './StockForm.scss';
import StockSelector from '../stock-selector/StockSelector';

const StockForm = () => {
  return (
    <div className="stock-form">
      <StockSelector />
    </div>
  );
};

export default StockForm;
