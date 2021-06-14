import formatData from './formatData';

const getCurrentWeather = async (city, units) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=c76cd77046b3b0e4cd4ff82d15c04e95`);
  const parsedResponse = await response.json();
  const lat = parsedResponse.coord.lat;
  const lon = parsedResponse.coord.lon;
  const name = parsedResponse.name;
  const countryCode = parsedResponse.sys.country;
  const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units}&appid=c76cd77046b3b0e4cd4ff82d15c04e95`);
  const parsedResponse2 = await response2.json();

  return formatData(parsedResponse2, name, countryCode, units);
};

export default getCurrentWeather;
