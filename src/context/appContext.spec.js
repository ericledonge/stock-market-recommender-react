import React from 'react';
import { mount, shallow } from 'enzyme';
import appContext from './appContext';

const FunctionalComponent = () => {
  appContext.useApp();
  return <div />;
};

test('useApp throws error when not wrapped in SuccessProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow(`useApp must be used within a AppProvider`);
});

test('useApp does not throw error when wrapped in SuccessProvider', () => {
  expect(() => {
    mount(
      <appContext.AppProvider>
        <FunctionalComponent />
      </appContext.AppProvider>
    );
  }).not.toThrow();
});
