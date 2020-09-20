import { recommendationAlgorithm, socialMediaCountGenerator, stockPriceGenerator } from './mocks/mocks';

// TODO: Make it async and use setTimeInterval to simulate network latency + spinner
export const getRecommendation = (stockSymbol, numberOfDays, socialMediaTypes, algorithmVersion) => {
  let response = {};

  const stockPrices = stockPriceGenerator(stockSymbol, numberOfDays);
  response.prices = stockPrices;

  const stockRecommendation = recommendationAlgorithm();
  response.recommendation = stockRecommendation;

  const stockMediaCount = socialMediaCountGenerator(socialMediaTypes);
  response.mediaCount = stockMediaCount;

  return response;
};
