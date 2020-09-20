import React from 'react';
import './StockForm.scss';
import StockSelector from '../stock-selector/StockSelector';
import DurationSelector from '../duration-selector/DurationSelector';
import { useApp } from '../../../context/appContext';

const StockForm = () => {
  const { setAreResultsReady } = useApp();

  return (
    <div className="stock-form">
      <StockSelector />
      <DurationSelector />
      <button onClick={() => setAreResultsReady(true)}>Submit</button>
    </div>
  );
};

export default StockForm;
