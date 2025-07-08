//邏輯核心
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Component：Angular 裝飾器，用來標示這是一個元件。
// OnInit：生命週期介面，當元件初始化時會觸發 ngOnInit()。
// CommonModule：提供基本結構指令（如 *ngIf、*ngFor）。
// FormsModule：提供 [(ngModel)] 雙向繫結功能。

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
// selector: HTML 中使用這個元件的標籤名稱（例：<app-todo>）。
// standalone: true: 此元件為 獨立元件，不依賴 NgModule。
// imports: 指定本元件需要的模組（僅限自己使用，不進入 AppModule）。
// templateUrl / styleUrls: 對應的 HTML 與 CSS 檔案位置。
export class Todo implements OnInit {
  newTask = '';
  tasks: { name: string; completed: boolean }[] = [];
  // newTask: 綁定輸入框的文字。
  // tasks: 儲存待辦事項陣列，每項有 name（文字）與 completed（是否完成）。

  ngOnInit(): void {
    const data = localStorage.getItem('myTasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }
  // ngOnInit()：元件初始化時觸發，從瀏覽器中取得已儲存的待辦清單資料。
  // localStorage.getItem()：讀取字串。
  // JSON.parse()：將字串轉回物件陣列。

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
      this.saveTasks();
    }
  }
  // 如果 newTask 非空白，則新增一筆任務到 tasks 陣列。
  // 清空輸入欄位後，執行 saveTasks()。

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
  // splice()：根據傳入的索引刪除指定任務。
  // 每次刪除後也會同步儲存。
  saveTasks() {
    localStorage.setItem('myTasks', JSON.stringify(this.tasks));
  }
  // 將 tasks 陣列轉成字串，存入瀏覽器本機儲存空間中。
}
