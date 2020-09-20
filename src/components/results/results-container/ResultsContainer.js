import React from 'react';
import './ResultsContainer.scss';
import appContext from '../../../context/appContext';
import StockPrices from '../stock-prices/StockPrices';
import StockSymbol from '../stock-symbol/StockSymbol';
import StockRecommendation from '../stock-recommendation/StockRecommendation';
import StockMedia from '../stock-media/StockMedia';

const ResultsContainer = ({ algorithmVersion }) => {
  const {
    state: { areResultsReady },
  } = appContext.useApp();

  if (areResultsReady) {
    return (
      <div>
        <div className="results-container">
          <div className="results-container__data">
            <StockSymbol data-test="stock-symbol-component" />
            <StockRecommendation data-test="stock-recommendation-component" />
            <StockMedia />
          </div>
          <div className="results-container__table">
            <StockPrices data-test="stock-prices-component" />
          </div>
        </div>
        <div className="footer">
          Algorithm Version Used: {algorithmVersion}
        </div>
      </div>
    );
  }

  return (<div></div>);
};

export default ResultsContainer;
