import React from 'react';
import { mount } from 'enzyme';
import FormContainer from './FormContainer';
import { findByTestAttr } from '../../../../test/testUtils';
import appContext from '../../../context/appContext';

const setup = () => {
  return mount(
    <appContext.AppProvider>
      <FormContainer />
    </appContext.AppProvider>
  );
};

describe('<FormContainer />', () => {
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

  it('contains the medial selector', () => {
    const durationSelector = findByTestAttr(wrapper, 'media-selector-component');
    expect(durationSelector.exists()).toBeTruthy();
  });
});
