import { stockPriceGenerator } from './mocks/mocks';

export const getStockPrice = (stockSymbol, numberOfDays) => {
  return stockPriceGenerator(stockSymbol, numberOfDays);
};
