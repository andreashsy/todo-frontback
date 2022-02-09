export class Todo {
  tid!: string
  title!: string
  description!: string
  priority!: string

  update(todo: Todo) {
    this.title = todo.title
    this.description = todo.description
    this.priority = todo.priority
  }
}
