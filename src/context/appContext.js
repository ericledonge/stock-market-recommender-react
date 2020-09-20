import React from 'react';
import { getRecommendation } from '../api/api';

// I use here a pattern suggested by Kent C. Dodds:
// https://kentcdodds.com/blog/application-state-management-with-react

const appContext = React.createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_STOCK_SYMBOL': {
      return { ...state, stock: action.payload };
    }
    case 'SET_DURATION': {
      return { ...state, duration: action.payload };
    }
    case 'SET_RESULTS_READY': {
      return { ...state, areResultsReady: action.payload };
    }
    case 'SET_STOCK_PRICES': {
      return { ...state, stockPrices: action.payload };
    }
    case 'SET_RECOMMENDATION': {
      return { ...state, recommendation: action.payload };
    }
    case 'SET_MEDIA_COUNT': {
      return { ...state, mediaCount: action.payload };
    }
    case 'SET_MEDIA_SELECTED': {
      return { ...state, mediaTypeSelected: action.payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

// TODO: Manage api errors
function AppProvider(props) {
  const [state, dispatch] = React.useReducer(appReducer, {
    stock: '',
    duration: 10,
    mediaTypesAvailable: ['Facebook', 'Twitter', 'LinkedIn'],
    mediaTypeSelected: [],
    areResultsReady: false,
    stockPrices: [],
    recommendation: '',
    mediaCount: []
  });

  const value = React.useMemo(() => [state, dispatch], [state]);

  return <appContext.Provider value={value} {...props} />;
}

function useApp() {
  const context = React.useContext(appContext);
  if (!context) {
    throw new Error(`useApp must be used within a AppProvider`);
  }
  const [state, dispatch] = context;

  const setStock = (stock) => dispatch({ type: 'SET_STOCK_SYMBOL', payload: stock });
  const setDuration = (duration) => dispatch({ type: 'SET_DURATION', payload: duration });
  const setRecommendation = (recommendation) => dispatch({ type: 'SET_RECOMMENDATION', payload: recommendation });

  const setMediaSelected = (media) => {
    if (!state.mediaTypeSelected.includes(media)) {
      state.mediaTypeSelected.push(media);
      dispatch({ type: 'SET_MEDIA_SELECTED', payload: state.mediaTypeSelected });
    } else {
      state.mediaTypeSelected = state.mediaTypeSelected.filter(e => e !== media);
      dispatch({ type: 'SET_MEDIA_SELECTED', payload: state.mediaTypeSelected });
    }
  };

  const setResults = (stockSymbol, numberOfDays) => {
    const response = getRecommendation(state.stock, state.duration, state.mediaTypeSelected);
    if (response) {
      dispatch({ type: 'SET_STOCK_PRICES', payload: response.prices });
      dispatch({ type: 'SET_RECOMMENDATION', payload: response.recommendation });
      dispatch({ type: 'SET_MEDIA_COUNT', payload: response.mediaCount });
      dispatch({ type: 'SET_RESULTS_READY', payload: true });
    } else {
      dispatch({ type: 'SET_RESULTS_READY', payload: false });
    }
  };

  return {
    state,
    setStock,
    setDuration,
    setRecommendation,
    setMediaSelected,
    setResults,
  };
}

export default { AppProvider, useApp };
