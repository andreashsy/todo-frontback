import { Component, OnInit } from '@angular/core';
import { Todo } from './module';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css']
})
export class TitlepageComponent implements OnInit {

  todoTitles: string[] = ["title1", "title2", "title3"]
  todoObjects: Todo[] = []

  constructor(private todoSvc: TodoService) {
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

  serverRefresh() {
    console.info("refresh button pressed!")
  }

  serverUpload() {
    console.info("upload button pressed!")
  }
}
