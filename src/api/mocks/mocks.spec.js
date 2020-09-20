import {
  getDates,
  getRoundedRandomNumber,
  recommendationAlgorithm,
  socialMediaCountGenerator,
  stockPriceGenerator
} from './mocks';

describe('stockPriceGenerator', () => {
  const STOCK_SYMBOL = 'GOOG';
  const NUMBER_OF_DAYS = 3;

  describe('when duration is NUMBER_OF_DAYS day', () => {
    it('returns an array of NUMBER_OF_DAYS objects containing date and price', () => {
      const stockPrices = stockPriceGenerator(STOCK_SYMBOL, NUMBER_OF_DAYS);
      console.log(stockPrices);
      expect(stockPrices).toHaveLength(3);
    });
  });
});

describe('recommendationAlgorithm', () => {
  it('returns randomly an answer among buy/hold/sell', () => {
    const values = ['BUY', 'HOLD', 'SELL'];
    const result = recommendationAlgorithm();
    expect(values).toContain(result);
  });
});

describe('socialMediaCountGenerator', () => {
  describe('when a single media type is provided', () => {
    it('returns an array with object', () => {
      const result = socialMediaCountGenerator(['Twitter']);
      console.log(result);
      expect(result).toHaveLength(1);
    });
  });
  describe('when a single media type is provided', () => {
    it('returns an array with two object', () => {
      const result = socialMediaCountGenerator(['Twitter', 'LinkedIn']);
      console.log(result);
      expect(result).toHaveLength(2);
    });
  });

});
