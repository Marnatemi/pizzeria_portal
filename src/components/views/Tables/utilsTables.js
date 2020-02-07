/* eslint-disable */

export const currentDateTime = () => {
  const date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth()+1;
  let currentYear = date.getFullYear();
  let currentHour = date.getHours();
  let currentMins = date.getMinutes();

  currentDay = currentDay  < 10 ? '0' + currentDay : currentDay;
  currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
  currentHour = currentHour < 10 ? '0' + currentHour : currentHour;
  currentMins = currentMins < 10 ? '0' + currentMins : currentMins;


  const correctFormatDate = currentYear + '-' + currentMonth + '-' + currentDay + 'T' + currentHour + ':' + currentMins;
  return (correctFormatDate);
};

export const currentDate = () => {
  const date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth()+1;
  let currentYear = date.getFullYear();

  currentDay = currentDay  < 10 ? '0' + currentDay : currentDay;
  currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;

  const correctFormatDate = currentYear + '-' + currentMonth + '-' + currentDay;
  return (correctFormatDate);
};


