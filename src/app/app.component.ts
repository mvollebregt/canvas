import { Component } from '@angular/core';
import { Table } from "./model/table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'canvas';

  public shapes = [
    new Table(10, 10, 20, 15),
    new Table(30, 10, 20, 15)
  ];
}
