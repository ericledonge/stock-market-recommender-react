import React from 'react';
import appContext from '../../../context/appContext';

const StockPrices = () => {
  const {
    state: { stockPrices },
  } = appContext.useApp();

  return (
    <div className="stock-prices">
      <table>
        <thead>
        <tr>
          <th>Day</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {stockPrices.map((day, index) => (
          <tr key={index}>
            <td>{day.date}</td>
            <td>{day.price}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockPrices;
