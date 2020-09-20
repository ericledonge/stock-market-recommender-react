import React from 'react';
import './StockRecommendation.scss';
import appContext from '../../../context/appContext';

const StockRecommendation = () => {
  const {
    state: { recommendation },
  } = appContext.useApp();

  const modifier = recommendation.split('').filter(e => e.trim().length).join('').toLowerCase();

  return (
    <div className="stock-recommendation">
      <span className="stock-recommendation__label">Our recommendation is</span>
      <span className={`stock-recommendation__value stock-recommendation__value--${modifier}`}>
        to {recommendation
      }</span>
    </div>
  );
};


export default StockRecommendation;
