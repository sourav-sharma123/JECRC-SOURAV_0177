import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="form">
      <input [(ngModel)]="title" placeholder="Enter task..." />
      <button (click)="addTask()">Add</button>

      <input [(ngModel)]="searchTerm" placeholder="Search..." />
      <button (click)="search()">Search</button>
    </div>
  `,
  styles: [`
    .form {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    flex: 1;
  }

  button {
    padding: 10px 15px;
    border-radius: 8px;
    background: linear-gradient(45deg, #00c6ff, #0072ff);
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    transform: scale(1.05);
  }
  `]
})
export class TaskFormComponent {

  title = '';
  searchTerm = '';

  @Output() taskAdded = new EventEmitter<void>();
  @Output() searchEvent = new EventEmitter<string>();


  constructor(private service: TaskService) {}

//   addTask() {
//   const task = { title: this.title, completed: false };

//   this.service.addTask(task).subscribe(() => {
//     this.title = '';
//     this.taskAdded.emit(); // trigger reload
//   });
// }

addTask() {
  if (!this.title.trim()) {
    alert('Please enter task!');
    return;
  }

  const task = { title: this.title, completed: false };

  this.service.addTask(task).subscribe(() => {
    alert('✅ Task Added Successfully!');
    this.title = '';
    this.taskAdded.emit();
  });
}

  search() {
    this.service.searchTasks(this.searchTerm).subscribe(data => {
      console.log(data); // you can connect later
    });
  }
}