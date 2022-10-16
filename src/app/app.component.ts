import { Component } from '@angular/core';
import { Square } from "./canvas/shapes/square";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public shapes = [
    new Square(50, 50, 100, 80),
    new Square(150, 50, 100, 80)
  ];
}
