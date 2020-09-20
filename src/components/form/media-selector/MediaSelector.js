import React from 'react';
import appContext from '../../../context/appContext';
import './MediaSelector.scss';
import FormCheckbox from '../form-checkbox/FormCheckbox';

const MediaSelector = () => {
  const {
    state: { mediaTypesAvailable },
    setMediaSelected
  } = appContext.useApp();

  return (
    <div className="media-selector">
      <div className="media-selector__label">Social media selection:</div>

      {mediaTypesAvailable.map((media, index) =>
        <div key={index} className="media-selector__item">
          <FormCheckbox label={media} selected={false} onChange={() => setMediaSelected(media)} />
        </div>)}

    </div>
  );
};

export default MediaSelector;

