import { recommendationAlgorithm, socialMediaCountGenerator, stockPriceGenerator } from './mocks/mocks';

// TODO: Make it async and use setTimeInterval to simulate network latency + spinner
export const getRecommendation = (stockSymbol, numberOfDays, socialMediaTypes, algorithmVersion) => {
  let response = {};

  const stockPrices = stockPriceGenerator(stockSymbol, numberOfDays);
  response.prices = stockPrices;

  const stockMediaCount = socialMediaCountGenerator(socialMediaTypes);
  response.mediaCount = stockMediaCount;

  const stockRecommendation = recommendationAlgorithm(stockPrices, stockMediaCount, algorithmVersion);
  response.recommendation = stockRecommendation;

  return response;
};
