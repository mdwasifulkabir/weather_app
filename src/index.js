import { getWeatherData } from "./weather";

const today = getWeatherData("Selangor")
today.then(info => console.log(info))
