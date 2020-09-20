import { stockPriceGenerator } from './mocks/mocks';

// TODO: Return social media count
// TODO: Return recommendation
// TODO: Make it async and use setTimeInterval to simulate network latency + spinner
export const getRecommendation = (stockSymbol, numberOfDays) => {
  return stockPriceGenerator(stockSymbol, numberOfDays);
};
