import './css/weather-icons.css';
import { getWeatherData } from "./weather";
import { displayToday } from "./dom";

await getWeatherData("Selangor")
displayToday()