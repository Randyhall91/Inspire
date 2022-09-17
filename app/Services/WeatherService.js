import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandboxServer } from "./AxiosService.js"




class WeatherService {
  async getWeather() {
    const res = await SandboxServer.get('api/weather')
    // console.log(res.data);

    // @ts-ignore
    appState.weather = new Weather(res.data)
    // console.log(appState.weather);
  }

}
export const weatherService = new WeatherService()