import React from 'react';
import { mount } from 'enzyme';
import ResultsContainer from './ResultsContainer';
import appContext from '../../../context/appContext';

let mockAppContext;

const setup = () => {
  return mount(
    <appContext.AppProvider>
      <ResultsContainer />
    </appContext.AppProvider>
  );
};

describe('<ResultsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  // it('contains the stock symbol', () => {
  //   const stockSymbol = findByTestAttr(wrapper, 'stock-symbol-component');
  //   expect(stockSymbol.exists()).toBeTruthy();
  // });
  //
  // it('contains the stock recommendation', () => {
  //   const stockRecommendation = findByTestAttr(wrapper, 'stock-recommendation-component');
  //   expect(stockRecommendation.exists()).toBeTruthy();
  // });
  //
  // it('contains the stock prices', () => {
  //   const stockPrices = findByTestAttr(wrapper, 'stock-prices-component');
  //   expect(stockPrices.exists()).toBeTruthy();
  // });
});
