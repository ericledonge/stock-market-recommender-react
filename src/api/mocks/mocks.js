import moment from 'moment';

export const stockPriceGenerator = (stockSymbol, numberOfDays) => {
  const startDate = moment().subtract(numberOfDays, 'days');
  const stopDate = moment();
  const days = getDates(startDate, stopDate);
  const results = days.map(day => {
    return { date: day, price: getRoundedRandomNumber(100, 200) };
  });
  return results;
};

export const getDates = (startDate, stopDate, numberOfDays) => {
  const dateArray = [];
  let currentDate = moment(startDate).add(1, 'days');
  const endDate = moment(stopDate);
  while (currentDate <= endDate) {
    dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
    currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;
};

export const getRoundedRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
