import { ImageController } from "./Controllers/ImageController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  imageController = new ImageController
  todoController = new TodoController
  weatherController = new WeatherController

}

window["app"] = new App();
