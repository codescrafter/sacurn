import dateFormat from 'dateformat';

const calcRange = (startDate: Date, endDate: Date) => {
  const start = dateFormat(startDate, 'yyyy-mm-dd');
  const end = dateFormat(endDate, 'yyyy-mm-dd');
  return `${start},${end}`;
};

export default calcRange;
