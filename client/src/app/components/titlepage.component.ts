import { Component, OnInit } from '@angular/core';
import { Todo } from './model';
import { ServerService } from './server.service';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css']
})
export class TitlepageComponent implements OnInit {

  todoTitles: string[] = ["title1", "title2", "title3"]
  todoObjects: Todo[] = []

  constructor(
    private todoSvc: TodoService,
    private serverSvc: ServerService,) {
  }

  ngOnInit(): void {
    this.getAllTodoObjects()
  }

  async getAllTitles() {
    this.todoTitles = await this.todoSvc.getAllTitles()
  }

  async getAllTodoObjects() {
    this.todoObjects = await this.todoSvc.getAllTodoObjects()
  }

  async serverRefresh() {
    console.info("refresh button pressed! Getting data from serve...")
    let data = await this.serverSvc.getServerData()
    console.info(data)
    this.todoSvc.deleteAll()
      .then(result => {
        console.info("All database items deleted! ", result)
      })
      .catch(error => {
        console.error(error)
      })

    //let jsonArray = JSON.parse(data)
    for (let json of data) {
      this.todoSvc.add(json as unknown as Todo)
        .then(result => {
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  async serverUpload() {
    console.info("upload button pressed!")
    let todoObjects = await this.todoSvc.getAllTodoObjects()
    let jsonString = todoObjects
      .map(a => JSON.stringify(a))
      .join(",")
    console.info("uploading string: ", jsonString)
    this.serverSvc.sendTodoList(jsonString)
      .then(result => {
        console.info(result)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
