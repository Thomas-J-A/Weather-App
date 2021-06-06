import getWeatherData from './getWeatherData';
import updatePage from './updatePage';
import './style.css';
// to enable async/await
// import '@babel/runtime';

const displayWeather = async (e) => {
  try {
    e.preventDefault();
    const data = await getWeatherData(input.value);
    updatePage(data);
  } catch (err) {
    console.log(err);
  }
};

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', displayWeather);
