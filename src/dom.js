import { week_data, location } from "./weather"

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

function displayToday() {
  const body = document.querySelector('body')
  const loc = document.createElement('h1')
  const todayCard = document.createElement('div')
  const day = document.createElement('h2')
  const temp = document.createElement('h3')
  const feelslike = document.createElement('p')
  const humidity = document.createElement('p')
  const description = document.createElement('h3')
  const icon = document.createElement('i')
  const fragment = document.createDocumentFragment();

  loc.textContent = location
  day.textContent = week_data[0].datetime
  temp.textContent = week_data[0].temp
  feelslike.textContent = week_data[0].feelslike
  humidity.textContent = week_data[0].humidity
  description.textContent = week_data[0].description
  icon.className = `wi ${iconMap[week_data[0].icon]}`

  todayCard.append(loc, day, temp, icon, feelslike, humidity, description)
  fragment.appendChild(todayCard)

  body.appendChild(fragment)
  console.log("week data: ")
}

export { displayToday }