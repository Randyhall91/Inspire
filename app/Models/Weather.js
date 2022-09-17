

export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather[0].icon
  }


  get weatherFahrenheitTemplate() {
    return /*html*/`
      <div class="selectable" onclick="app.weatherController._drawWeatherCelsius()">
          ${this.Fahrenheit}°Fahrenheit
      </div>
      <div>
          ${this.weather}
      </div>
      <div>
          <img src="https://openweathermap.org/img/wn/${this.icon}.png">
      </div>
  `
  }
  get weatherCelsiusTemplate() {
    return /*html*/`
      <div class="selectable" onclick="app.weatherController._drawWeatherFahrenheit()">
          ${this.Celsius}°Celsius
      </div>
      <div>
          ${this.weather}
      </div>
      <div>
          <img src="https://openweathermap.org/img/wn/${this.icon}.png">
      </div>
  `
  }

  get Fahrenheit() {
    let temp = 9 / 5 * (this.temp - 273) + 3
    // console.log(temp);


    return Math.round(temp)
  }

  get Celsius() {
    let temp = this.temp - 273.15

    return Math.round(temp)
  }


}