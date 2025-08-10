import { getWeatherData } from "./weather";
import { displayToday } from "./dom";

await getWeatherData("Selangor")
displayToday()