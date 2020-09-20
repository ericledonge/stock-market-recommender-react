import React from 'react';
import './StockForm.scss';
import StockSelector from '../stock-selector/StockSelector';
import DurationSelector from '../duration-selector/DurationSelector';
import { useApp } from '../../../context/appContext';

const StockForm = () => {
  const {
    state: { stock, duration },
    setResults
  } = useApp();

  return (
    <div className="stock-form">
      <StockSelector />
      <DurationSelector />
      {/* TODO: Social Media Selector */}
      {/* TODO: Algorithms Selector */}
      <button
        onClick={() => setResults(stock, duration)}
        className="stock-form__validation"
      >
        Submit
      </button>
    </div>
  );
};

export default StockForm;
