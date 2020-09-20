import moment from 'moment';

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
