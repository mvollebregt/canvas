import { Component } from '@angular/core';
import { Square } from "./model/square";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'canvas';

  public shapes = [
    new Square(10, 10, 20, 15),
    new Square(30, 10, 20, 15)
  ];
}
