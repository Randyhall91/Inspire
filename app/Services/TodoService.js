import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { SandboxServer } from "./AxiosService.js"




class TodoService {
  async isComplete(id) {
    let todo = appState.todos.find(t => t.id == id)
    // @ts-ignore
    todo.completed = !todo.completed
    await SandboxServer.put(`api/Randy/todos/${id}`, todo)
    appState.emit('todos')
  }
  async getTodo() {
    const res = await SandboxServer.get('api/Randy/todos')

    appState.todos = res.data.map(t => new Todo(t))

    console.log('Get Complete', res.data);
  }
  async addTodo(formData) {
    const res = await SandboxServer.post("/api/Randy/todos", formData)
    const newTodo = new Todo(formData)
    appState.todos = [...appState.todos, newTodo]
    console.log('add complete');
  }

  async deleteTodo(id) {
    await SandboxServer.delete(`/api/Randy/todos/${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
  }
  get totalCompleted() {
    let total = 0
    appState.todos.forEach(t => {
      if (t.completed == true) {
        total++
      }
    })
    return total
  }

}


export const todoService = new TodoService()