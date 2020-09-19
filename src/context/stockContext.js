import React from 'react';

const StockContext = React.createContext();

function useStock() {
  const context = React.useContext(StockContext);

  if (!context) {
    throw new Error('useStock must be used within a StockProvider');
  }

  return context;
}

function StockProvider(props) {
  const [stock, setStock] = React.useState('');

  const value = React.useMemo(() => [stock, setStock], [stock]);

  return <StockContext.Provider value={value} {...props} />;
}

export { StockProvider, useStock };
