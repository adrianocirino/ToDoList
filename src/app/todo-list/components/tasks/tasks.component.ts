import { map } from 'rxjs/operators';
import { Store } from './../../todo.store';
import { Observable, Subscription } from 'rxjs';
import { TasksService } from './../../todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit(): void {
    this.todolist$ = this.store.getTodoList().pipe(
      map(todolist => todolist.filter(task => !task.finalizado && !task.iniciado))
    );

    this.subscription = this.taskService.getToDoList$.subscribe();
  }

  onToggle(event: any): void {
    this.taskService.toggle(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
