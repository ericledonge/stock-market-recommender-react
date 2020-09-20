import React from 'react';
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
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default StockPrices;
