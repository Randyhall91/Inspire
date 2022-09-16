



/**@param {{description: string, completed: boolean, id: string}} data */


export class Todo {


  constructor(data) {
    this.description = data.description
    this.completed = data.completed || false
    this.id = data.id
  }


  get todosTemplate() {
    return /*html*/`
    <div class="d-flex">
      <input class="me-3" type="checkbox" name="completed" id="completed" onchange="app.todoController.isComplete('${this.id}')" ${this.completed ? 'checked' : ''}>
      <p class="me-auto">${this.description}</p>
      <i class="mdi mdi-delete" onclick="app.todoController.deleteTodo('${this.id}')"></i>
    </div>
  `
  }



}