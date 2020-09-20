import { recommendationAlgorithm, socialMediaCountGenerator, stockPriceGenerator } from './mocks/mocks';

// TODO: Make it async and use setTimeInterval to simulate network latency + spinner
export const getRecommendation = (stockSymbol, numberOfDays, socialMediaTypes, algorithmVersion) => {
  let response = {};

  const stockPrices = stockPriceGenerator(stockSymbol, numberOfDays);
  response.prices = stockPrices;

  const stockMediaCount = socialMediaCountGenerator(socialMediaTypes);
  response.mediaCount = stockMediaCount;

  response.recommendation = recommendationAlgorithm(stockPrices, stockMediaCount, algorithmVersion);

  return response;
};

export const getInitialParameters = () => {
  return { initialAlgorithmVersion: '1.0' };
};
