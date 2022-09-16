import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { todoService } from "../Services/TodoService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawTodos() {
  let template = ''
  appState.todos.forEach(t => template += t.todosTemplate)
  setHTML('todos', template)
  setHTML('completed', todoService.totalCompleted)
}


export class TodoController {
  constructor() {
    appState.on('todos', _drawTodos)
    this.getTodo()
  }

  async addTodo() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newTodo = getFormData(form)
      await todoService.addTodo(newTodo)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[addTodo]', error);
      Pop.error(error)
    }
  }
  async deleteTodo(id) {
    try {
      await todoService.deleteTodo(id)
    } catch (error) {
      console.error('[deleteTodo]', error);
      Pop.error(error)
    }
  }
  async getTodo() {
    try {
      await todoService.getTodo()
    } catch (error) {
      console.error('[gettodo]', error);
      Pop.error(error)
    }
  }
  async isComplete(id) {
    try {
      await todoService.isComplete(id)
    } catch (error) {
      console.error('[isComplete]', error);
      Pop.error(error)
    }


  }


}