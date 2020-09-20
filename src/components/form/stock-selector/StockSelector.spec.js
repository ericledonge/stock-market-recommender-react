import React from 'react';
import { mount } from 'enzyme';
import StockSelector from './StockSelector';
import { findByTestAttr } from '../../../../test/testUtils';
import appContext from '../../../context/appContext';

const setup = () => {
  return mount(
    <appContext.AppProvider>
      <StockSelector />
    </appContext.AppProvider>
  );
};

describe('<StockSelector />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a label', () => {
    const stockLabel = findByTestAttr(wrapper, 'stock-label');
    expect(stockLabel.text()).toContain('Stock Symbol');
  });

  it('renders an input field', () => {
    const stockInput = findByTestAttr(wrapper, 'stock-input');
    expect(stockInput.html()).toContain('input');
  });
});
