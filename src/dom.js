import { week_data } from "./weather"

const content = document.querySelector('.content')

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
  for (const week of week_data) {
    const todayCard = document.createElement('div')
    const date = document.createElement('h2')
    const temp = document.createElement('h3')
    const feelslike = document.createElement('p')
    const humidity = document.createElement('p')
    const description = document.createElement('h3')
    const icon = document.createElement('i')
    const fragment = document.createDocumentFragment();
    const day = week 

    date.textContent = day.datetime
    temp.textContent = `Temperature: ${day.temperature} °C`
    feelslike.textContent = `Feels like ${day.feelslike} °C`
    humidity.textContent = `Humidity: ${day.humidity}`
    description.textContent = day.description

    icon.className = `wi ${iconMap[day.icon]}`
    todayCard.className = 'weather-card'

    todayCard.append(date, temp, icon, feelslike, humidity, description)
    fragment.appendChild(todayCard)

    content.appendChild(fragment)
  }
}

export { renderCards }