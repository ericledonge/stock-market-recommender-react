import { stockPriceGenerator } from './mocks/mocks';

// TODO: Make it async and use setTimeInterval
export const apiGetStockPrice = (stockSymbol, numberOfDays) => {
  return stockPriceGenerator(stockSymbol, numberOfDays);
};
