import { Component } from '@angular/core';
import { Todo } from './todo/todo';
// @filename: todo.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo],
  template: `<app-todo></app-todo>`,
})
export class AppComponent {}
