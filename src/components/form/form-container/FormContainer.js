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

  const handleSubmit = () => {
    if (stock !== '') {
      setResults(stock, duration);
    } else {
      // TODO: Refactor this ugly alert to put a Snackbar / Toast.
      alert('Please fill in Stock Symbol');
    }
  };

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
          onClick={handleSubmit}
          className="stock-form__validation"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
