import React from 'react';
import './StockForm.scss';
import StockSelector from '../stock-selector/StockSelector';
import DurationSelector from '../duration-selector/DurationSelector';

const StockForm = () => {
  return (
    <div className="stock-form">
      <StockSelector
        data-test="stock-selector-component"
        className="stock-form__stock-selector"
      />
      <DurationSelector
        data-test="duration-selector-component"
        className="stock-form__duration-selector"
      />
    </div>
  );
};

export default StockForm;
