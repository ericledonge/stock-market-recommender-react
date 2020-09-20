import {
  getDates,
  getRoundedRandomNumber,
  recommendationAlgorithm,
  socialMediaCountGenerator,
  stockPriceGenerator
} from './mocks';

describe('stockPriceGenerator', () => {
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
  const STOCK_PRICES = [];
  const STOCK_SYMBOL = 'GOOG';
  const ALGORITHM_VERSION = '1.0';

  describe('when attractiveness is more than 10000', () => {
    it('returns BUY', () => {
      const SOCIAL_COUNT = [
        {
          mediaType: 'Twitter',
          attractiveness: 10000
        },
        {
          mediaType: 'LinkedIn',
          attractiveness: 20000
        }
      ];
      const result = recommendationAlgorithm(STOCK_PRICES, SOCIAL_COUNT, ALGORITHM_VERSION);
      expect(result).toContain('BUY');
    });
  });

  describe('when attractiveness is less than -10000', () => {
    it('returns SELL', () => {
      const SOCIAL_COUNT = [
        {
          mediaType: 'Twitter',
          attractiveness: -10000
        },
        {
          mediaType: 'LinkedIn',
          attractiveness: -20000
        }
      ];
      const result = recommendationAlgorithm(STOCK_PRICES, SOCIAL_COUNT, ALGORITHM_VERSION);
      expect(result).toContain('SELL');
    });
  });

  describe('when attractiveness is more than -10000 and less than 10000', () => {
    it('returns HOLD', () => {
      const SOCIAL_COUNT = [
        {
          mediaType: 'Twitter',
          attractiveness: -10000
        },
        {
          mediaType: 'LinkedIn',
          attractiveness: 10000
        }
      ];
      const result = recommendationAlgorithm(STOCK_PRICES, SOCIAL_COUNT, ALGORITHM_VERSION);
      expect(result).toContain('HOLD');
    });
  });
});

describe('socialMediaCountGenerator', () => {
  describe('when a single media type is provided', () => {
    it('returns an array with object', () => {
      const result = socialMediaCountGenerator(['Twitter']);
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
