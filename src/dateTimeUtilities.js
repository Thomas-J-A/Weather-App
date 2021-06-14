const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDayOfWeek = (unixNum) => {
  const date = new Date(unixNum * 1000);
  return days[date.getUTCDay()];
};

const getHour = (unixNum, offset) => {
  const date = new Date((unixNum + offset) * 1000);
  let hour = date.getUTCHours();
  const amOrPm = (hour < 12) ? 'am' : 'pm';
  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;
  return `${hour}${amOrPm}`;
};

const formatDateTime = (unixNum, offset) => {
  const d = new Date((unixNum + offset) * 1000);
  const day = days[d.getUTCDay()];

  // Format date of month with st/nd/rd/th
  let date = d.getUTCDate();
  switch (date) {
    case 1:
    case 21:
    case 31:
      date += 'st';
      break;
    case 2:
    case 22:
      date += 'nd';
      break;
    case 3:
    case 23:
      date += 'rd';
      break;
    default:
      date += 'th';
  }

  const month = months[d.getUTCMonth()];
  const year = d.getFullYear();

  // Calculate hour with AM/PM
  let hour = d.getUTCHours();
  const amOrPm = (hour < 12) ? 'am' : 'pm';
  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;

  const minutes = d.getUTCMinutes().toString().padStart(2, '0');

  return `${day} ${date} ${month} ${year}, ${hour}:${minutes}${amOrPm}`;
};

export {
  getDayOfWeek,
  getHour,
  formatDateTime,
};
