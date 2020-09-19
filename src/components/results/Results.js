import React from 'react';
import { useStock } from '../../context/stockContext';

const Results = () => {
  const [stock] = useStock();

  return (<div>The stock is {stock}</div>);
};

export default Results;
