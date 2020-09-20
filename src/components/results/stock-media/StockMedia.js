import React from 'react';
import { useApp } from '../../../context/appContext';

const StockMedia = () => {
  const {
    state: { mediaTypeSelected },
  } = useApp();

  return (
    <div className="stock-symbol">
      Media Types Selected:
      {
        mediaTypeSelected.map((media, index) => media)
      }
    </div>
  );
};

export default StockMedia;
