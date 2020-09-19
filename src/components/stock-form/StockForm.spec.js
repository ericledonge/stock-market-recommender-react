import React from 'react';
import { shallow } from 'enzyme';
import StockForm from './StockForm';
import { findByTestAttr } from '../../../test/testUtils';

const setup = () => {
  return shallow(<StockForm />);
};

describe('<StockForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the stock selector', () => {
    const stockSelector = findByTestAttr(wrapper, 'stock-selector-component');
    expect(stockSelector.exists()).toBeTruthy();
  });
});
