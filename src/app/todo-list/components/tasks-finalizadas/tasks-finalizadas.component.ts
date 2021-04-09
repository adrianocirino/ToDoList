import { Store } from './../../todo.store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'app-tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: ['./tasks-finalizadas.component.scss']
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit(): void {
   this.finalizados$ = this.store.getTodoList().pipe(
     map(todolist => todolist.filter(task => task.finalizado && !task.iniciado))
   );
  }

  onToggle(event: any): void {
    this.taskService.toggle(event);
  }
}
