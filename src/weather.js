let week_data = []
let hours_data = []
let location = ""

async function getWeatherData(location) {
  const weather_key = "5D3Q7NUNQRC7RC2ES22BG982L"
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${weather_key}&contentType=json`;

  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json()
    return extractWeatherInfo(data);

  } catch (error) {
    console.log(`Error: ${error}`)
    return null
  }
}

function extractWeatherInfo(data) {
  let week = data.days.slice(0, 7)
  hours_data = data.days[0].hours
  console.log(hours_data)
  location = data.resolvedAddress
  console.log(location)
  
  for (const day of week) {
    const day_data = {
      temperature: day.temp,
      feelslike: day.feelslike,
      humidity: day.humidity,
      datetime: day.datetime,
      description: day.description,
      icon: day.icon
    }

    week_data.push(day_data)
    console.log(day_data)
  }
}

export { getWeatherData, week_data, location }
