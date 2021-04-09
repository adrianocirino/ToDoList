import { Store } from './todo.store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './tasks';
import { tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

  urlApi = 'http://localhost:3000/todolist';

  constructor(private http: HttpClient, private store: Store) { }

  getToDoList$: Observable<Task[]> = this.http
    .get<Task[]>(this.urlApi)
    .pipe(
      tap(nextValue => this.store.set('todolist', nextValue))
    );

  toggle(event: any): void {
    this.http.put(`${this.urlApi}/${event.task.id}`, event.task)
      .subscribe(() => {
        const value = this.store.value.todolist;
        const todolist = value.map((task: Task) => {
          if (event.task.id === task.id) {
            return { ...task, ...event.task };
          } else {
            return task;
          }
        });

        this.store.set('todolist', todolist);

    });
  }

    //

  // getToDoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.urlApi);
  // }
}
