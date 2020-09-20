import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import FormContainer from './components/form/form-container/FormContainer';
import ResultsContainer from './components/results/results-container/ResultsContainer';
import appContext from './context/appContext';

function App() {
  return (
    <div className="app">
      <appContext.AppProvider>
        <Header data-test="header-component" />
        <div className="app__form">
          <FormContainer data-test="stock-form-component" />
        </div>
        <div className="app__results">
          <ResultsContainer />
        </div>
      </appContext.AppProvider>
    </div>
  );
}

export default App;
