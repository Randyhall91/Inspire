import { BackGroundController } from "./Controllers/BackGroundController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backGroundController = new BackGroundController
  todoController = new TodoController
  weatherController = new WeatherController

}

window["app"] = new App();
