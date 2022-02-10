import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { Todo } from "./model";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService extends Dexie {
  todo: Dexie.Table<Todo, string>

  constructor() {
    super('todo-db')

    this.version(1).stores({
      todo: 'tid'
    })

    this.todo = this.table('todo')
  }

  addNew(todo: Partial<Todo>): Promise<string> {
    todo.tid = uuidv4().toString().substring(0, 8)
    console.info("Generated tid: ", todo.tid)
    return this.todo.put(todo as Todo)
  }

  add(todo: Todo): Promise<string> {
    return this.todo.put(todo as Todo)
  }

  public async getAllTitles(): Promise<string[]> {
    const t = await this.todo.toArray()
    return t.map(v => v.title)
  }

  public async getAllTodoObjects(): Promise<Todo[]> {
    const t = await this.todo.toArray()
    return t
  }

  public async getTodoByTid(tid: string): Promise<Todo> {
    const todoObject = await this.todo.get(tid) as Todo
    return todoObject
  }

  public async updateTodo(todo: Todo, tid: string) {
    return await this.todo.put(todo, tid)
  }

  public async deleteTodo(tid: string) {
    const t = await this.todo
      .where("tid").equals(tid)
      .delete()
    return t
  }

  public async deleteAll():Promise<any> {
    return await this.todo.clear()
  }
}
