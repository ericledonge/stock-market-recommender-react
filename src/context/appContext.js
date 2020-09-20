import React from 'react';

const AppContext = React.createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_STOCK': {
      return { ...state, stock: action.payload };
    }
    case 'SET_DURATION': {
      return { ...state, duration: action.payload };
    }
    case 'SET_RESULTS_READY': {
      return { ...state, areResultsReady: action.payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function AppProvider(props) {
  const [state, dispatch] = React.useReducer(appReducer, {
    stock: '',
    duration: 10,
    areResultsReady: false
  });

  const value = React.useMemo(() => [state, dispatch], [state]);

  return <AppContext.Provider value={value} {...props} />;
}

function useApp() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const setStock = (stock) => dispatch({ type: 'SET_STOCK', payload: stock });
  const setDuration = (duration) => dispatch({ type: 'SET_DURATION', payload: duration });
  const setAreResultsReady = (ready) => dispatch({ type: 'SET_RESULTS_READY', payload: ready });

  return {
    state,
    dispatch,
    setStock,
    setDuration,
    setAreResultsReady
  };
}

export { AppProvider, useApp };
