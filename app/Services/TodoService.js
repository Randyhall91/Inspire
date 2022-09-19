import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { Pop } from "../Utils/Pop.js"
import { SandboxServer } from "./AxiosService.js"




class TodoService {
  async isComplete(id) {
    let todo = appState.todos.find(t => t.id == id)
    // console.log(todo);
    if (!todo) {
      throw new Error('bad id')
    }
    todo.completed = !todo.completed
    await SandboxServer.put(`api/Randy/todos/${id}`, todo)

    appState.emit('todos')
  }
  async getTodo() {
    const res = await SandboxServer.get('api/Randy/todos')

    appState.todos = res.data.map(t => new Todo(t))

    // console.log('Get Complete', res.data);
  }
  async addTodo(formData) {
    const res = await SandboxServer.post("/api/Randy/todos", formData)
    const newTodo = new Todo(res.data)
    appState.todos = [...appState.todos, newTodo]
    // console.log('add complete');
  }

  async deleteTodo(id) {
    if (confirm("Are you sure?") == true) {

      await SandboxServer.delete(`/api/Randy/todos/${id}`)
      appState.todos = appState.todos.filter(t => t.id != id)
    }
  }
  get totalCompleted() {
    let complete = 0
    let total = 0
    appState.todos.forEach(t => {
      if (t.completed == true) {
        total++
      }
    })
    complete = appState.todos.length
    return complete - total
  }

}


export const todoService = new TodoService()