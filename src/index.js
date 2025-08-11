import './css/weather-icons.css';
import './css/styles.css'
import { getWeatherData, location } from "./weather";
import { renderCards } from "./dom";

const locationHeader = document.querySelector('.location')
locationHeader.textContent = location
await getWeatherData("Selangor")
renderCards()