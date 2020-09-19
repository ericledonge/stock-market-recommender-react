import React from 'react';
import './DurationSelector.scss';
import { useDuration } from '../../../context/durationContext';

const DurationSelector = () => {
  const [duration, setDuration] = useDuration();

  return (
    <div className="duration-selector">
      <label
        data-test="duration-label"
        className="duration-selector__label"
      >Duration (in days)
        <input
          data-test="duration-input"
          className="duration-selector__input"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </label>
    </div>
  );
};

export default DurationSelector;
