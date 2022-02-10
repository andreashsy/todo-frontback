import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TitlepageComponent } from './components/titlepage.component';
import { TodoInfoComponent } from './components/todo-info.component';
import { TodoAddComponent } from './components/todo-add.component';
import { TodoService } from './components/todo.service';
import { ServerService } from './components/server.service';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  {path: '', component: TitlepageComponent},
  {path: 'add', component: TodoAddComponent},
  {path: 'todo/:id', component: TodoInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TitlepageComponent,
    TodoInfoComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ TodoService,
                ServerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
