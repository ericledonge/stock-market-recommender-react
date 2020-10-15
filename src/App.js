import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import FormContainer from './components/form/form-container/FormContainer';
import ResultsContainer from './components/results/results-container/ResultsContainer';
import appContext from './context/appContext';
import { getParameters } from './actions/actions';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ALGORITHM_VERSION': {
      return { ...state, algorithmVersion: action.payload };
    }
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {

  const [state, dispatch] = React.useReducer(
    reducer,
    { algorithmVersion: '' }
  );

  const setAlgorithmVersion = (algorithmVersion) => {
    dispatch({ type: 'SET_ALGORITHM_VERSION', payload: algorithmVersion });
  };

  React.useEffect(() => {
      async function fetchInitialParameters() {
        const result = await getParameters();
        setAlgorithmVersion(result.initialAlgorithmVersion);
      }

      fetchInitialParameters();
    },
    []
  );

  return (
    <div className="app">
      <appContext.AppProvider>
        <Header data-test="header-component" />
        <div className="app__form">
          <FormContainer data-test="stock-form-component" />
        </div>
        <div className="app__results">
          <ResultsContainer algorithmVersion={state.algorithmVersion} />
        </div>
      </appContext.AppProvider>
    </div>
  );
}

export default App;
