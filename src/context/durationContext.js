import React from 'react';

const DurationContext = React.createContext();

function useDuration() {
  const context = React.useContext(DurationContext);

  if (!context) {
    throw new Error('useDuration must be used within a DurationProvider');
  }

  return context;
}

function DurationProvider(props) {
  const [duration, setDuration] = React.useState('');

  const value = React.useMemo(() => [duration, setDuration], [duration]);

  return <DurationContext.Provider value={value} {...props} />;
}

export { DurationProvider, useDuration };
