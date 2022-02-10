import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from './model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  addForm!: FormGroup
  constructor(private fb: FormBuilder, private todoSvc: TodoService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: this.fb.control(''),
      description: this.fb.control(''),
      priority: this.fb.control('low')
    })
  }

  addTodo() {
    let todo = this.addForm.value as Todo
    console.info("todoAdd button pressed! Todo: ", todo)
    this.todoSvc.addNew(todo)
      .then(id => {
        console.info("id is: ", id)
        this.addForm.reset()
      })
  }



}
