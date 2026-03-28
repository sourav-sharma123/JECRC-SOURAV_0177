import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  template: `
    <div class="container">
    <h1>📝 Task Manager</h1>

    <app-task-form 
  (taskAdded)="reloadList()" 
  (searchEvent)="searchTasks($event)">
</app-task-form>

<app-task-list #taskList></app-task-list>
  </div>
  `,
  styles: [`
    .container {
      width: 800px;
      margin: auto;
      font-family: Arial;
    }.container {
    max-width: 900px;
    margin: 30px auto;
    font-family: 'Segoe UI';
  }

  h1 {
    text-align: center;
    color: #333;
  }
  `]
})
export class AppComponent {
  @ViewChild('taskList') taskList!: TaskListComponent;
  reloadList() {
  this.taskList.loadTasks();
  
}
    searchTasks(term: string) {
  this.taskList.search(term);
}
}