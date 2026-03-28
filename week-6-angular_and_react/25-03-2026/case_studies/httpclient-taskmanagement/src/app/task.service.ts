// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Task } from './task';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   private api = 'https://jsonplaceholder.typicode.com/todos';

//   constructor(private http: HttpClient) { }

//   getTasks() : Observable<Task[]> {
//     return this.http.get<Task[]>(this.api);
//   }

//   getTaskById(id: number): Observable<Task> {
//     return this.http.get<Task>(`${this.api}/${id}`);
//   }

//   addTask(task: Task): Observable<Task> {
//     return this.http.post<Task>(this.api, task);
//   }

//   updateTask(task: Task): Observable<Task> {
//     return this.http.put<Task>(`${this.api}/${task.id}`, task); 
//   }

//   updateTaskStatus(id: number, completed: boolean): Observable<Task> {
//     return this.http.patch<Task>(`${this.api}/${id}`,{
//       completed: completed
//     });
//   }

//   updatePartial(id: number, data: Partial<Task>): Observable<Task> {
//     return this.http.patch<Task>(`${this.api}/${id}`, data);
//   }

//   deleteTask(id: number): Observable<any> {
//     return this.http.delete(`${this.api}/${id}`);
//   }

//   searchTasks(term: string): Observable<Task[]> {
//     return this.http.get<Task[]>(`${this.api}?title_like=${term}`);
//   }
// }


import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build Project', completed: true }
  ];

  private idCounter = 3;

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): Observable<Task> {
    task.id = this.idCounter++;
    this.tasks.push(task);
    return of(task);
  }

  deleteTask(id: number): Observable<any> {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return of(true);
  }

  updateTaskStatus(id: number, completed: boolean): Observable<Task> {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = completed;
    return of(task!);
  }

  searchTasks(term: string): Observable<Task[]> {
    const filtered = this.tasks.filter(t =>
      t.title.toLowerCase().includes(term.toLowerCase())
    );
    return of(filtered);
  }
}