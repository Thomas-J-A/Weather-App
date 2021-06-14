import getWeatherData from './getWeatherData';
import renderWeatherData from './renderWeatherData';
import './carousel';
import './style.css';
// to enable async/await
// import '@babel/runtime';

const form = document.querySelector('form');
const input = document.querySelector('input');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const dailyDropdown = document.querySelectorAll('.dropdown_btn')[0];
const dailyForecast = document.querySelector('.daily_forecast');
const hourlyDropdown = document.querySelectorAll('.dropdown_btn')[1];
const hourlyForecast = document.querySelector('.hourly_forecast');

let location = 'Rotorua';

const displayWeather = async (e) => {
  try {
    e.preventDefault();

    // Check whether to use default city or input value
    location = (e.target.nodeName === 'FORM') ? input.value : location;
    const metricOrImperial = (toggleSwitch.checked) ? 'metric' : 'imperial';
    input.value = '';
    const weatherData = await getWeatherData(location, metricOrImperial);
    renderWeatherData(weatherData);
  } catch (err) {
    console.log(err);
  }
};

const toggleDailyForecast = () => {
  // Ensure both forecasts aren't being
  // displayed simultaneously
  if (hourlyForecast.classList.contains('show_block')) toggleHourlyForecast();
  dailyForecast.classList.toggle('show_flex');
  dailyDropdown.classList.toggle('active_dropdown');
};

const toggleHourlyForecast = () => {
  // Ensure both forecasts aren't being
  // displayed simultaneously
  if (dailyForecast.classList.contains('show_flex')) toggleDailyForecast();
  hourlyForecast.classList.toggle('show_block');
  hourlyDropdown.classList.toggle('active_dropdown');
};

form.addEventListener('submit', displayWeather);
toggleSwitch.addEventListener('change', displayWeather);
dailyDropdown.addEventListener('click', toggleDailyForecast);
hourlyDropdown.addEventListener('click', toggleHourlyForecast);

window.onload = displayWeather;
