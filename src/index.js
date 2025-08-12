import './css/weather-icons.css';
import './css/styles.css'
import { getWeatherData, location } from "./weather";
import { renderCards } from "./dom";

const locationHeader = document.querySelector('.location')
const searchForm = document.querySelector('#search-form')

locationHeader.textContent = location
await getWeatherData("Selangor")
renderCards()