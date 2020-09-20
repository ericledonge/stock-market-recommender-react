import React from 'react';
import { useApp } from '../../../context/appContext';
import StockPrices from '../stock-prices/StockPrices';
import StockSymbol from '../stock-symbol/StockSymbol';
import StockRecommendation from '../stock-recommendation/StockRecommendation';
import StockMedia from '../stock-media/StockMedia';

const ResultsContainer = () => {
  const {
    state: { areResultsReady },
  } = useApp();

  if (areResultsReady) {
    return (
      <div className="results-container">
        <div className="results-container__title">
          <StockSymbol data-test="stock-symbol-component" />
        </div>
        <div>
          <StockMedia />
        </div>
        <div className="results-container__recommendation">
          <StockRecommendation data-test="stock-recommendation-component" />
        </div>
        <div className="results-container__prices">
          <StockPrices data-test="stock-prices-component" />
        </div>
      </div>
    );
  }

  return (<div></div>);
};

export default ResultsContainer;
