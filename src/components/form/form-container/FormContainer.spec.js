import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from './StockForm';
import { findByTestAttr } from '../../../../test/testUtils';

const setup = () => {
  return shallow(<FormContainer />);
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

  it('contains the duration selector', () => {
    const durationSelector = findByTestAttr(wrapper, 'duration-selector-component');
    expect(durationSelector.exists()).toBeTruthy();
  });
});
