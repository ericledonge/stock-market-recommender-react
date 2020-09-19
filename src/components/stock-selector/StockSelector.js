import React from 'react';
import './StockSelector.scss';

const StockSelector = () => {
  return (
    <div className="stock-selector">
      <label
        data-test="stock-label"
        className="stock-selector__label"
      >Stock Symbol
        <input
          data-test="stock-input"
          className="stock-selector__input"
        />
      </label>
    </div>
  );
};

export default StockSelector;
