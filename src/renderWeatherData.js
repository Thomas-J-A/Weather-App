const renderWeatherData = (data) => {
  // Local datetime in header
  const dateTime = document.getElementById('date_time');
  dateTime.textContent = data.dateTime;

  // Current weather
  const location = document.getElementById('location');
  const temp = document.getElementById('temp');
  const units = document.getElementById('current_weather_units');
  const description = document.getElementById('description');
  const feelsLike = document.getElementById('feels_like');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('wind_speed');

  location.textContent = data.current.location;
  temp.textContent = data.current.temp;
  units.textContent = data.current.units;
  description.textContent = data.current.descriptionDetailed;
  feelsLike.textContent = data.current.feelsLike;
  humidity.textContent = data.current.humidity;
  windSpeed.textContent = data.current.windSpeed;

  // Daily forecast
  const dailyForecastDiv = document.querySelector('.daily_forecast');

  // Clear current data
  dailyForecastDiv.textContent = '';

  // Add new data
  data.daily.forEach((day) => {
    const dailyCard = document.createElement('div');
    const weekday = document.createElement('p');
    const maxTempContainer = document.createElement('div');
    const maxTemp = document.createElement('span');
    const maxTempUnits = document.createElement('span');
    const minTempContainer = document.createElement('div');
    const minTemp = document.createElement('span');
    const minTempUnits = document.createElement('span');
    const icon = document.createElement('i');

    weekday.textContent = day.day;
    weekday.classList.add('daily_day');
    maxTemp.textContent = day.maxTemp;
    maxTemp.classList.add('daily_max');
    maxTempUnits.textContent = day.units;
    maxTempUnits.classList.add('daily_max_units');
    minTemp.textContent = day.minTemp;
    minTemp.classList.add('daily_min');
    minTempUnits.textContent = day.units;
    minTempUnits.classList.add('daily_min_units');

    switch (day.description) {
      case 'clear sky':
        icon.classList.add('fas');
        icon.classList.add('fa-sun');
        break;
      case 'few clouds':
      case 'broken clouds':
      case 'scattered clouds':
        icon.classList.add('fas');
        icon.classList.add('fa-cloud-sun');
        break;
      case 'overcast clouds':
        icon.classList.add('fas');
        icon.classList.add('fa-cloud');
        break;
      case 'light rain':
      case 'moderate rain':
        icon.classList.add('fas');
        icon.classList.add('fa-cloud-sun-rain');
        break;
      case 'heavy intensity rain':
        icon.classList.add('fas');
        icon.classList.add('fa-cloud-showers-heavy');
        break;
      default:
        icon.classList.add('fas');
        icon.classList.add('fa-sun');
    }

    maxTempContainer.appendChild(maxTemp);
    maxTempContainer.appendChild(maxTempUnits);
    minTempContainer.appendChild(minTemp);
    minTempContainer.appendChild(minTempUnits);

    dailyCard.appendChild(weekday);
    dailyCard.appendChild(maxTempContainer);
    dailyCard.appendChild(minTempContainer);
    dailyCard.appendChild(icon);

    dailyForecastDiv.appendChild((dailyCard));
  });

  // Hourly forecast
  const slides = document.querySelectorAll('.slide');

  // Clear current data
  slides.forEach((slide) => {
    slide.textContent = '';
  });

  // Add new data
  for (let i = 0; i < slides.length; i++) {
    let offset;
    if (i === 0) offset = 0;
    else if (i === 1) offset = 8;
    else offset = 16;

    for (let j = 0 + offset; j < 8 + offset; j++) {
      const hourlyInfoDiv = document.createElement('div');
      const hour = document.createElement('p');
      const tempContainer = document.createElement('div');
      const temp = document.createElement('span');
      const units = document.createElement('span');
      const icon = document.createElement('i');

      hour.textContent = data.hourly[j].hour;
      hour.classList.add('hourly_hour');
      temp.textContent = data.hourly[j].temp;
      temp.classList.add('hourly_temp');
      units.textContent = data.hourly[j].units;
      units.classList.add('hourly_units');

      switch (data.hourly[j].description) {
        case 'clear sky':
          icon.classList.add('fas');
          icon.classList.add('fa-sun');
          break;
        case 'few clouds':
        case 'broken clouds':
        case 'scattered clouds':
          icon.classList.add('fas');
          icon.classList.add('fa-cloud-sun');
          break;
        case 'overcast clouds':
          icon.classList.add('fas');
          icon.classList.add('fa-cloud');
          break;
        case 'light rain':
        case 'moderate rain':
          icon.classList.add('fas');
          icon.classList.add('fa-cloud-sun-rain');
          break;
        case 'heavy intensity rain':
          icon.classList.add('fas');
          icon.classList.add('fa-cloud-showers-heavy');
          break;
        default:
          icon.classList.add('fas');
          icon.classList.add('fa-sun');
      }

      tempContainer.appendChild(temp);
      tempContainer.appendChild(units);

      hourlyInfoDiv.appendChild(hour);
      hourlyInfoDiv.appendChild(tempContainer);
      hourlyInfoDiv.appendChild(icon);

      slides[i].appendChild(hourlyInfoDiv);
    }
  }
};

export default renderWeatherData;
