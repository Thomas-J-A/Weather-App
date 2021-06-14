import getCountryName from './isoCountries';
import capitalize from './capitalize';
import { getDayOfWeek, formatDateTime, getHour } from './dateTimeUtilities';

const formatData = (data, name, countryCode, units) => {
  const current = {};
  const daily = [];
  const hourly = [];

  const dateTime = formatDateTime(data.current.dt, data.timezone_offset);

  // Current weather
  current.location = `${name}, ${getCountryName(countryCode)}`;
  current.temp = data.current.temp.toFixed();
  current.descriptionDetailed = capitalize(data.current.weather[0].description);
  current.humidity = `Humidity: ${data.current.humidity}%`;

  if (units === 'metric') {
    current.units = '°C';
    current.feelsLike = `Feels Like: ${data.current.feels_like.toFixed()}°C`;
    current.windSpeed = `Wind Speed: ${((data.current.wind_speed * 18) / 5).toFixed()}km/h`;
  } else {
    current.units = '°F';
    current.feelsLike = `Feels Like: ${data.current.feels_like.toFixed()}°F`;
    current.windSpeed = `Wind Speed: ${data.current.wind_speed.toFixed()}m/h`;
  }

  // Daily weather
  for (let i = 1; i <= 7; i++) {
    const dailyForecast = {};
    dailyForecast.day = getDayOfWeek(data.daily[i].dt);
    dailyForecast.maxTemp = data.daily[i].temp.max.toFixed();
    dailyForecast.minTemp = data.daily[i].temp.min.toFixed();
    dailyForecast.description = data.daily[i].weather[0].description;
    dailyForecast.units = (units === 'metric') ? '°C' : '°F';
    daily.push(dailyForecast);
  }

  // Hourly weather
  for (let i = 1; i <= 24; i++) {
    const hourlyForecast = {};
    hourlyForecast.hour = getHour(data.hourly[i].dt, data.timezone_offset);
    hourlyForecast.temp = data.hourly[i].temp.toFixed();
    hourlyForecast.description = data.hourly[i].weather[0].description;
    hourlyForecast.units = (units === 'metric') ? '°C' : '°F';
    hourly.push(hourlyForecast);
  }

  return {
    dateTime,
    current,
    daily,
    hourly,
  };
};

export default formatData;
