import React from 'react';
import appContext from '../../../context/appContext';

const StockMedia = () => {
  const {
    state: { mediaCount },
  } = appContext.useApp();

  return (
    <div className="stock-symbol">
      <div>
        Media Count Analysis:
        {
          mediaCount.map((media, index) => (
            <div key={index}>
              For {media.mediaType}: Attractiveness: {media.attractiveness}, Positive Posts: {media.positivePost},
              Negative posts: {media.negativePost}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default StockMedia;
