import React from 'react';
import './FormContainer.scss';
import StockSelector from '../stock-selector/StockSelector';
import DurationSelector from '../duration-selector/DurationSelector';
import { useApp } from '../../../context/appContext';
import MediaSelector from '../media-selector/MediaSelector';

const FormContainer = () => {
  const {
    state: { stock },
    setResults
  } = useApp();

  const handleSubmit = () => {
    if (stock !== '') {
      setResults();
    } else {
      // TODO: Refactor this ugly alert to put a Snackbar / Toast.
      alert('Please fill in Stock Symbol');
    }
  };

  return (
    <div className="form-container">
      <div>
        <StockSelector data-test="stock-selector-component" />
      </div>
      <div>
        <DurationSelector data-test="duration-selector-component" />
      </div>
      <div>
        <MediaSelector data-test="media-selector-component" />
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
