import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-list';
  items = [];
  addToItems;
  index;

  onAdd() {
    this.items.push(this.addToItems);
  }
  onDelete() {
    this.items.splice(this.index, 1);
  }
}
