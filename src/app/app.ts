import { Component } from '@angular/core';
import { Todo } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo],
  template: `<app-todo></app-todo>`,
})
export class AppComponent {}
