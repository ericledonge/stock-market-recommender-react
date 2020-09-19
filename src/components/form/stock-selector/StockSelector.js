import React from 'react';
import './StockSelector.scss';
import { useStock } from '../../../context/stockContext';

const StockSelector = () => {
  const [stock, setStock] = useStock();

  return (
    <div className="stock-selector">
      <label
        data-test="stock-label"
        className="stock-selector__label"
      >Stock Symbol
        <input
          data-test="stock-input"
          className="stock-selector__input"
          value={stock}
          onChange={(event) => setStock(event.target.value)}
        />
      </label>
    </div>
  );
};

export default StockSelector;
