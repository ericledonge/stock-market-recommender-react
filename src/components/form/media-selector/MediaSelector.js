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
      <div>Social Media Types</div>

      {
        mediaTypesAvailable.map((media, index) =>
          <FormCheckbox key={index} label={media} selected={false} onChange={() => setMediaSelected(media)} />
        )
      }

    </div>
  );
};

export default MediaSelector;

