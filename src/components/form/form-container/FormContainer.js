import React from 'react';
import './FormContainer.scss';
import StockSelector from '../stock-selector/StockSelector';
import DurationSelector from '../duration-selector/DurationSelector';
import { useApp } from '../../../context/appContext';
import MediaSelector from '../media-selector/MediaSelector';

const FormContainer = () => {
  const {
    state: { stock, duration },
    setResults
  } = useApp();

  return (
    <div className="form-container">
      <div>
        <StockSelector />
      </div>
      <div>
        <DurationSelector />
      </div>
      <div>
        <MediaSelector />
      </div>
      <div>
        <button
          onClick={() => setResults(stock, duration)}
          className="stock-form__validation"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
