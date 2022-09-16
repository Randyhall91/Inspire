import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";




export class WeatherController {
  constructor() {
    this.getWeather()
    appState.on('weather', this._drawWeatherFahrenheit)

  }
  _drawWeatherCelsius() {
    // @ts-ignore
    setHTML('weather', appState.weather.weatherCelsiusTemplate)

  }
  _drawWeatherFahrenheit() {
    // @ts-ignore
    setHTML('weather', appState.weather.weatherFahrenheitTemplate)

  }
  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('[GetWeather]', error);
      Pop.error(error)
    }
  }
}


