import getCountryName from './isoCountries';
import capitalize from './capitalize';

const formatData = (data) => {
  const location = `${data.name}, ${getCountryName(data.sys.country)}`;
  const tempC = `${data.main.temp.toFixed()}\xB0C`;
  const tempF = `${(data.main.temp * (9 / 5) + 32).toFixed()}\xB0F`;
  const description = capitalize(data.weather[0].description);
  const feelsLike = `Feels like: ${data.main.feels_like.toFixed()}\xB0C`;
  const humidity = `Humidity: ${data.main.humidity}%`;
  const windSpeed = `Wind Speed: ${((data.wind.speed * 18) / 5).toFixed()}km/h`;

  return {
    location,
    tempC,
    tempF,
    description,
    feelsLike,
    humidity,
    windSpeed,
  };
};

export default formatData;
