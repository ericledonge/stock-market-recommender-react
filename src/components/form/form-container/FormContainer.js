import React from 'react';
import './FormContainer.scss';
import StockSelector from '../stock-selector/StockSelector';
import DurationSelector from '../duration-selector/DurationSelector';
import appContext from '../../../context/appContext';
import MediaSelector from '../media-selector/MediaSelector';

const FormContainer = () => {
  const {
    state: { stock },
    setResults
  } = appContext.useApp();

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
      <StockSelector data-test="stock-selector-component" />
      <DurationSelector data-test="duration-selector-component" />
      <MediaSelector data-test="media-selector-component" />

      <div className="form-container__select">
        <label>Algorithm: </label>
        <select>
          <option value="regular">Regular</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="form-container__validation">
        <button
          onClick={handleSubmit}
          className=" stock-form__validation"
          data-test=" submit-button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
