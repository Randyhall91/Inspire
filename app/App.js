import { BackGroundController } from "./Controllers/BackGroundController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backGroundController = new BackGroundController
  todoController = new TodoController
  weatherController = new WeatherController
  quoteController = new QuoteController
  timeController = new TimeController
}

window["app"] = new App();
