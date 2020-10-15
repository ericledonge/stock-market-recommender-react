import React from 'react';
import { mount } from 'enzyme';
import FormContainer from './FormContainer';
import { findByTestAttr } from '../../../../test/testUtils';
import appContext from '../../../context/appContext';

let state = {};

jest.spyOn(window, 'alert').mockImplementation(() => {
});

let dispatch = jest.fn();

const setup = ({ stock }) => {
  state.stock = stock || '';
  state.duration = 10;
  state.mediaTypesAvailable = ['Twitter'];
  state.mediaTypeSelected = state.mediaTypesAvailable;

  return mount(
    <appContext.AppProvider value={[state, dispatch]}>
      <FormContainer />
    </appContext.AppProvider>
  );
};

describe('<FormContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({});
    dispatch.mockClear();
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

  describe('when stock is empty', () => {
    it('does not call dispatch', () => {
      wrapper = setup({});
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      submitButton.simulate('click');

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe('when stock is not empty', () => {
    it('calls dispatch', async () => {
      const runAllPromises = () => new Promise(setImmediate);
      wrapper = setup({ stock: 'GOOG' });
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      submitButton.simulate('click');
      await runAllPromises();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
