import React from 'react';
import './DurationSelector.scss';

const DurationSelector = () => {
  return (
    <div className="duration-selector">
      <label
        data-test="duration-label"
        className="duration-selector__label"
      >Duration (in days)
        <input
          data-test="duration-input"
          className="duration-selector__input"
        />
      </label>
    </div>
  );
};

export default DurationSelector;
