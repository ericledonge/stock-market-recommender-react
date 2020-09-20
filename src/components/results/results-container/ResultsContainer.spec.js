import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../../../test/testUtils';
import ResultsContainer from './ResultsContainer';
import { AppProvider } from '../../../context/appContext';

const setup = () => {
  return mount(
    <AppProvider>
      <ResultsContainer />
    </AppProvider>
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

  // Have to mock areResultsReady
  it.skip('contains the stock prices', () => {
    const stockPrices = findByTestAttr(wrapper, 'stock-prices-component');
    expect(stockPrices.exists()).toBeTruthy();
  });
});
