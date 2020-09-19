import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const setup = () => {
  return shallow(<Header />);
};

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders the App title', () => {
    expect(wrapper.text()).toContain('BSMR');
  });
});
