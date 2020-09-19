import React from 'react';
import './StockForm.scss';
import { useStock } from '../../../context/stockContext';

const StockForm = () => {
  const [stock, setStock] = useStock();

  return (
    <div className="stock-form">
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
    </div>
  );
};

export default StockForm;
