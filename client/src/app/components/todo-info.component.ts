import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './module';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-info',
  templateUrl: './todo-info.component.html',
  styleUrls: ['./todo-info.component.css']
})
export class TodoInfoComponent implements OnInit {

  todo!: Todo
  tid!: string
  editForm!: FormGroup

  constructor(
    private todoSvc: TodoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.tid = this.activatedRoute.snapshot.params['id']
    this.initialiseForm()
    this.todoSvc.getTodoByTid(this.tid)
      .then(result => {
        this.todo = result
        this.initialiseForm(result)
      })
  }

  initialiseForm(todo?: Todo) {
    this.editForm = this.fb.group({
      title: this.fb.control(todo?.title || ""),
      description: this.fb.control(todo?.description || ""),
      priority: this.fb.control(todo?.priority || "low")
    })
  }

  editTodo() {
    let editedTodo = this.editForm.value as Todo
    console.info("updating todo: ", this.todo.tid)

    //this.todo.update(editedTodo)

    this.todo.title = editedTodo.title
    this.todo.description = editedTodo.description
    this.todo.priority = editedTodo.priority

    this.todoSvc.updateTodo(this.todo, this.todo.tid)
      .then(result => {
        console.info("Edit success for tid: ", result)
        this.editForm.reset()
        this.router.navigate([''])
      })

  }

  deleteTodo() {
    console.info("starting delete for tid: ", this.todo.tid)
    this.todoSvc.deleteTodo(this.todo.tid)
      .then(result => {
        console.log("deleted %s records!", result)
        this.editForm.reset()
        this.router.navigate([''])
      })

  }

}
