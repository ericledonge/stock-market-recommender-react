import React from 'react';
import './StockPrices.scss';
import appContext from '../../../context/appContext';
import { Line } from 'react-chartjs-2';

const StockPrices = () => {
  const {
    state: { stockPrices },
  } = appContext.useApp();

  const dataMapped = {
    labels: stockPrices.map(el => el.date),
    datasets: [
      {
        label: 'price (USD)',
        data: stockPrices.map(el => el.price),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)'
      }
    ]
  };

  return (
    <div className="stock-prices">
      <div className="stock-prices__graph">
        <Line
          data={dataMapped}
          options={{}}
          width={350}
          height={350}
        />
      </div>
      <div className="stock-prices__table">
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
    </div>
  );
};

export default StockPrices;
