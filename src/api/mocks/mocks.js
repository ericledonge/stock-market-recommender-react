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

  for (const socialMediaType of socialMediaTypes) {
    mediaType = socialMediaType;
    positivePost = getRoundedRandomNumber(1000, 100000);
    negativePost = getRoundedRandomNumber(1000, 100000);

    results.push({ mediaType: mediaType, positivePost: positivePost, negativePost: negativePost });
  }

  return results;
};

// TODO: Make it smarter by taking in account SocialMediaCount results
export const recommendationAlgorithm = (stockPrices, socialMediaCount, algorithmVersion) => {
  const values = ['BUY', 'HOLD', 'SELL'];
  const result = values[Math.floor(Math.random() * values.length)];
  return result;
};
