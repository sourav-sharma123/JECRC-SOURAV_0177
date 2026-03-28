import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

//   loadTasks() {
//   this.service.getTasks().subscribe(data => {
//     console.log(data); // 👈 check if data is coming
//     this.tasks = data.slice(0, 10);
//   });
// }

loadTasks() {
  this.service.getTasks().subscribe(data => {
    this.tasks = data.slice(0, 10);
  });
}
search(term: string) {
  if (!term) {
    this.loadTasks();
    return;
  }

  this.service.searchTasks(term).subscribe(data => {
    this.tasks = data;
  });
}

  deleteTask(id: number) {
    this.service.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleStatus(task: Task) {
    this.service.updateTaskStatus(task.id!, !task.completed)
      .subscribe(() => this.loadTasks());
  }
}