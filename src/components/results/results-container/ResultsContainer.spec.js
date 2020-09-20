import React from 'react';
import { mount } from 'enzyme';
import ResultsContainer from './ResultsContainer';
import appContext from '../../../context/appContext';
import { findByTestAttr } from '../../../../test/testUtils';

let state = {};

const setup = ({ areResultsReady }) => {
  state.recommendation = 'TO BUY';
  state.areResultsReady = areResultsReady || false;
  state.stockPrices = [{ date: '2020-09-20', price: 169 }];
  state.mediaCount = [{ mediaType: 'Facebook', positivePost: 9, negativePost: 4, attractiveness: 5 }];

  return mount(
    <appContext.AppProvider value={[state, jest.fn()]}>
      <ResultsContainer />
    </appContext.AppProvider>
  );
};

describe('<ResultsContainer />', () => {
  let wrapper;

  it('renders without error', () => {
    wrapper = setup({});
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the stock symbol', () => {
    wrapper = setup({ areResultsReady: true });
    const stockSymbol = findByTestAttr(wrapper, 'stock-symbol-component');
    expect(stockSymbol.exists()).toBeTruthy();
  });

  it('contains the stock recommendation', () => {
    wrapper = setup({ areResultsReady: true });
    const stockRecommendation = findByTestAttr(wrapper, 'stock-recommendation-component');
    expect(stockRecommendation.exists()).toBeTruthy();
  });

  it('contains the stock prices', () => {
    wrapper = setup({ areResultsReady: true });
    const stockPrices = findByTestAttr(wrapper, 'stock-prices-component');
    expect(stockPrices.exists()).toBeTruthy();
  });
});
