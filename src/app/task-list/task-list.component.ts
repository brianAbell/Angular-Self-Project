import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {
  // creates a referenceable object - "injected TaskService into the constructor"
  constructor(private taskService: TaskService) {}
  
  // array of tasks
  tasks: Task[] = [];

  // initialize the component
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
