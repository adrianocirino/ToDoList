import { map } from 'rxjs/operators';
import { Store } from './../../todo.store';
import { TasksService } from './../../todo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: ['./tasks-iniciadas.component.scss']
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit(): void {
    this.iniciados$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
      );
  }

  onToggle(event: any): void {
    console.log(event);
    this.taskService.toggle(event);
  }

}
