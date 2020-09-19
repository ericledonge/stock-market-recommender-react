import React from 'react';
import './StockForm.scss';
import StockSelector from '../stock-selector/StockSelector';

const StockForm = () => {
  return (
    <div className="stock-form">
      <StockSelector
        data-test="stock-selector-component"
        className="stock-form__stock-selector"
      />
    </div>
  );
};

export default StockForm;
