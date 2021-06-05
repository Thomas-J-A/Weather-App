import './style.css';
// to enable async/await
// import '@babel/runtime';

const logWeatherData = async (e) => {
  try {
    e.preventDefault();
    const city = input.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c76cd77046b3b0e4cd4ff82d15c04e95`);
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    const data = {
      location: parsedResponse.name,
      tempC: parsedResponse.main.temp,
      tempF: parsedResponse.main.temp * (9 / 5) + 32,
      description: parsedResponse.weather[0].description,
      feelsLike: parsedResponse.main.feels_like,
      humidity: parsedResponse.main.humidity,
      windSpeed: (parsedResponse.wind.speed * 18) / 5,
    };
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', logWeatherData);
