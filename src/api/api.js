import { recommendationAlgorithm, socialMediaCountGenerator, stockPriceGenerator } from './mocks/mocks';

export const mockRecommendationApi = (stockSymbol, numberOfDays, socialMediaTypes, algorithmVersion) => {
  let response = {};

  const stockPrices = stockPriceGenerator(stockSymbol, numberOfDays);
  response.prices = stockPrices;

  const stockMediaCount = socialMediaCountGenerator(socialMediaTypes);
  response.mediaCount = stockMediaCount;

  response.recommendation = recommendationAlgorithm(stockPrices, stockMediaCount, algorithmVersion);

  return response;
};

export const mockInitialParameters = () => {
  return { initialAlgorithmVersion: '1.0' };
};
