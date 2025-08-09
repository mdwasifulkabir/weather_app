async function getWeatherData(location) {
  const weather_key = "5D3Q7NUNQRC7RC2ES22BG982L"
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${weather_key}&contentType=json`;

  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

getWeatherData("Selangor")