import moment from 'moment';
import { getDates, getRoundedRandomNumber } from '../helpers/helpers';

export const stockPriceGenerator = (stockSymbol, numberOfDays) => {
  const startDate = moment().subtract(numberOfDays, 'days');
  const stopDate = moment();
  const days = getDates(startDate, stopDate);
  const results = days.map(day => {
    return { date: day, price: getRoundedRandomNumber(100, 200) };
  });
  return results;
};

export const socialMediaCountGenerator = (socialMediaTypes) => {
  let results = [];
  let mediaType;
  let positivePost;
  let negativePost;
  let attractiveness;

  for (const socialMediaType of socialMediaTypes) {
    mediaType = socialMediaType;
    positivePost = getRoundedRandomNumber(1000, 100000);
    negativePost = getRoundedRandomNumber(1000, 100000);
    attractiveness = positivePost - negativePost;

    results.push({
      mediaType: mediaType,
      positivePost: positivePost,
      negativePost: negativePost,
      attractiveness: attractiveness
    });
  }

  return results;
};

export const recommendationAlgorithm = (stockPrices, socialMediaCount, algorithmVersion) => {

  const globalAttractiveness = socialMediaCount.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.attractiveness;
  }, 0);

  let result;
  if (globalAttractiveness > 10000) {
    result = 'BUY';
  } else {
    if (globalAttractiveness > -10000) {
      result = 'HOLD';
    } else {
      result = 'SELL';
    }
  }

  return result;
};
