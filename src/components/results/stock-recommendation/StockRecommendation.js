import React from 'react';
import { useApp } from '../../../context/appContext';

const StockRecommendation = () => {
  const {
    state: { recommendation },
  } = useApp();

  return (
    <div className="stock-recommendation">
      Our recommendation is to {recommendation}
    </div>
  );
};

export default StockRecommendation;
