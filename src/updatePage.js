import clearSky from './images/clearSky.jpg';
import fewClouds from './images/fewClouds.jpg';
import brokenClouds from './images/brokenClouds.jpg';
import scatteredClouds from './images/scatteredClouds.jpg';
import overcastClouds from './images/overcastClouds.jpg';
import lightRain from './images/lightRain.jpg';
import scatteredShowers from './images/scatteredShowers.jpg';

const updatePage = (data) => {
  const location = document.getElementById('location');
  const temp = document.getElementById('temp');
  const description = document.getElementById('description');
  const feelsLike = document.getElementById('feels_like');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('wind_speed');

  location.textContent = data.location;
  temp.textContent = data.tempC;
  description.textContent = data.description;
  feelsLike.textContent = data.feelsLike;
  humidity.textContent = data.humidity;
  windSpeed.textContent = data.windSpeed;

  switch (data.description) {
    case 'Clear sky':
      document.body.style.backgroundImage = `url(${clearSky})`;
      break;
    case 'Few clouds':
      document.body.style.backgroundImage = `url(${fewClouds})`;
      break;
    case 'Broken clouds':
      document.body.style.backgroundImage = `url(${brokenClouds})`;
      break;
    case 'Scattered clouds':
      document.body.style.backgroundImage = `url(${scatteredClouds})`;
      break;
    case 'Overcast clouds':
      document.body.style.backgroundImage = `url(${overcastClouds})`;
      break;
    case 'Scattered showers':
      document.body.style.backgroundImage = `url(${scatteredShowers})`;
      break;
    case 'Light rain':
      document.body.style.backgroundImage = `url(${lightRain})`;
      break;
    default:
      document.body.style.backgroundImage = `url(${clearSky})`;
  }

  document.body.style.backgroundSize = 'cover';
};

export default updatePage;
