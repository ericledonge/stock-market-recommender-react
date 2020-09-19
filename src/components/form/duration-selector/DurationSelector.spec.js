import React from 'react';
import { shallow } from 'enzyme';
import DurationSelector from './DurationSelector';
import { findByTestAttr } from '../../../../test/testUtils';

const setup = () => {
  return shallow(<DurationSelector />);
};

describe('<DurationSelector />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders a label', () => {
    const durationLabel = findByTestAttr(wrapper, 'duration-label');
    expect(durationLabel.text()).toContain('Duration (in days)');
  });

  it('renders an input field', () => {
    const durationInput = findByTestAttr(wrapper, 'duration-input');
    expect(durationInput.html()).toContain('input');
  });
});