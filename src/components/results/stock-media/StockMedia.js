import React from 'react';
import './StockMedia.scss';
import appContext from '../../../context/appContext';

const StockMedia = () => {
  const {
    state: { mediaCount },
  } = appContext.useApp();

  return (
    <div className="stock-media">
      <div className="stock-media__title">
        Media Count Analysis:
      </div>
      <div className="stock-media__content">
        {
          mediaCount.map((media, index) => (
            <div className="stock-media__item" key={index}>
              For {media.mediaType}:
              <ul>
                <li>Attractiveness: {media.attractiveness}</li>
                <li>Positive Posts: {media.positivePost}</li>
                <li>Negative posts: {media.negativePost}</li>
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default StockMedia;
