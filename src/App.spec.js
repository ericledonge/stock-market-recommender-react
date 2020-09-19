import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../test/testUtils';

const setup = () => {
  return shallow(<App />);
};

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('contains the Header', () => {
    const header = findByTestAttr(wrapper, 'header-component');
    expect(header.exists()).toBeTruthy();
  });
});
