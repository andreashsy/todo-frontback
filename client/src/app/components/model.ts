export class Todo {
  tid: string
  title: string
  description: string
  priority: string


  constructor(
    tid: string,
    title: string,
    description: string,
    priority: string,
  ) {
    this.tid = tid
    this.title = title
    this.description = description
    this.priority = priority

  }

  public update(newTodo: Todo) {
    this.title = newTodo.title
    this.description = newTodo.description
    this.priority = newTodo.priority
  }


}
