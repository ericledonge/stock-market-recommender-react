import React from 'react';
import { shallow } from 'enzyme';
import StockSelector from './StockSelector';
import { findByTestAttr } from '../../../test/testUtils';

const setup = () => {
  return shallow(<StockSelector />);
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
    const stockInput = findByTestAttr(wrapper, 'stock-label');
    expect(stockInput.html()).toContain('input');
  });
});
