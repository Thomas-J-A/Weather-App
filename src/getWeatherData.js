import formatData from './formatData';

const getWeatherData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c76cd77046b3b0e4cd4ff82d15c04e95`);
  const parsedResponse = await response.json();
  return formatData(parsedResponse);
};

export default getWeatherData;
