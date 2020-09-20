import React from 'react';
import { useApp } from '../../../context/appContext';
import './MediaSelector.scss';
import FormCheckbox from '../form-checkbox/FormCheckbox';

const MediaSelector = () => {
  const {
    state: { mediaTypesAvailable },
    setMediaSelected
  } = useApp();

  // const MyCheckBox = ({ media }) => {
  //   return (
  //     <div>
  //       <input type="checkbox" />
  //       <label>{media}</label>
  //     </div>
  //   );
  // };

  return (
    <div className="media-selector">
      <div>Social Media Types</div>

      {
        mediaTypesAvailable.map((media, index) =>
          <FormCheckbox key={index} label={media} selected={false} onChange={() => setMediaSelected(media)} />
        )
      }

      {/*{*/}
      {/*  mediaTypesAvailable.map((media, index) =>*/}
      {/*    <MyCheckBox media={media} key={index} />*/}
      {/*  )*/}
      {/*}*/}

    </div>
  );
};

export default MediaSelector;

