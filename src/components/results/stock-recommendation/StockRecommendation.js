import React from 'react';
import appContext from '../../../context/appContext';

const StockRecommendation = () => {
  const {
    state: { recommendation },
  } = appContext.useApp();

  return (
    <div className="stock-recommendation">
      Our recommendation is to {recommendation}
    </div>
  );
};

export default StockRecommendation;
