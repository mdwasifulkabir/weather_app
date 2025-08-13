import './css/weather-icons.css';
import './css/styles.css'
import { getWeatherData, location } from "./weather";
import { renderCards } from "./dom";

const locationHeader = document.querySelector('.location')
const searchForm = document.querySelector('#search-form')
const locationInput = document.querySelector('#location-input')

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const loc = locationInput.value
  await getWeatherData(loc)
  locationHeader.textContent = location
  renderCards()
})
