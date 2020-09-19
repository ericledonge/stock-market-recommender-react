import React from 'react';
import './StockForm.scss';
import StockSelector from '../stock-selector/StockSelector';
import DurationSelector from '../duration-selector/DurationSelector';

const StockForm = () => {
  return (
    <div className="stock-form">
      <StockSelector />
      <DurationSelector />
    </div>
  );
};

export default StockForm;
