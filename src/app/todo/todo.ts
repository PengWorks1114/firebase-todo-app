import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
})
export class Todo implements OnInit {
  newTask = '';
  tasks: { name: string; completed: boolean }[] = [];

  ngOnInit(): void {
    const data = localStorage.getItem('myTasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
      this.saveTasks();
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('myTasks', JSON.stringify(this.tasks));
  }
}
