import React from 'react';
import { useApp } from '../../context/appContext';

const Results = () => {
  const {
    state: { stock, duration, areResultsReady },
  } = useApp();

  if (areResultsReady) {
    return (<div>The stock is {stock} et the duration is {duration}</div>);
  }

  return (<div></div>);


};

export default Results;
