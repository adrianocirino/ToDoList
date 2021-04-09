import { Store } from './todo-list/todo.store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TasksService } from './todo-list/todo.service';
import { TodoComponent } from './todo-list/todo.component';
import { TasksIniciadasComponent } from './todo-list/components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './todo-list/components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksComponent } from './todo-list/components/tasks/tasks.component';
import { TodoListComponent } from './todo-list/components/todo-list/todo-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TasksService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
