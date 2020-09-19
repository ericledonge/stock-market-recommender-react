import React from 'react';
import { useStock } from '../../context/stockContext';
import { useDuration } from '../../context/durationContext';

const Results = () => {
  const [stock] = useStock();
  const [duration] = useDuration();

  return (<div>The stock is {stock} et the duration is {duration}</div>);
};

export default Results;
