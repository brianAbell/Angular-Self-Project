import { Injectable } from '@angular/core';
import { Task } from './task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { 
    
  }

  // Array of tasks
  private tasks: Task[] = [];

  // add specified task
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // delete specified task by its associated id
  deleteTask(id: string): void {
    // create a new array containing all tasks EXCEPT specified one to delete
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // get list of tasks
  getTasks(): Task[] {
    return this.tasks;
  }
}
