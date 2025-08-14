import { week_data } from "./weather"
import { format, isToday } from "date-fns"

const todayDiv = document.querySelector('.today-wrapper')
const forecastDiv = document.querySelector('.forecast-wrapper')

const iconMap = {
  "clear-day": "wi-day-sunny",
  "clear-night": "wi-night-clear",
  "partly-cloudy-day": "wi-day-cloudy",
  "partly-cloudy-night": "wi-night-alt-cloudy",
  "cloudy": "wi-cloudy",
  "rain": "wi-rain",
  "snow": "wi-snow",
  "sleet": "wi-sleet",
  "wind": "wi-strong-wind",
  "fog": "wi-fog",
  "showers-day": "wi-day-showers",
  "showers-night": "wi-night-alt-showers",
  "thunderstorm": "wi-thunderstorm",
  "hail": "wi-hail"
}

function renderCards() {
  todayDiv.innerHTML = ""
  forecastDiv.innerHTML = ""
  week_data.forEach((day, index) => {
    const dayCard = document.createElement('div')
    const date = document.createElement('h2')
    const temp = document.createElement('h3')
    const feelslike = document.createElement('p')
    const humidity = document.createElement('p')
    const description = document.createElement('h3')
    const icon = document.createElement('i')
    const fragment = document.createDocumentFragment();

    let formatted
    if (isToday(day.date)) {
      formatted =  `Today, ${format(day.date, 'MMMM d')}`
    } else {
      formatted = format(day.date, 'EEEE')
    }

    date.textContent = formatted
    temp.textContent = `Temperature: ${day.temperature} °C`
    feelslike.textContent = `Feels like ${day.feelslike} °C`
    humidity.textContent = `Humidity: ${day.humidity}`
    description.textContent = day.description

    icon.className = `wi ${iconMap[day.icon]}`
    dayCard.classList.add('weather-card')

    dayCard.append(date, temp, icon, feelslike, humidity, description)
    fragment.appendChild(dayCard)

    if (index == 0) {
      dayCard.classList.add('today-card')
      todayDiv.appendChild(dayCard)
    } else {
      dayCard.classList.add('forecast')
      forecastDiv.appendChild(dayCard)
    }
  })
}

export { renderCards }