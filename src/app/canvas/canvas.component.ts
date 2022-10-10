import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Shape } from "../model/shape";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html'
})
export class CanvasComponent implements AfterViewInit {

  private _shapes: Shape[] = [];

  @Input() set shapes(shapes: Shape[]) {
    this._shapes = shapes;
    this.drawShapes();
  };

  @ViewChild('canvasElement') canvasElement: ElementRef<HTMLCanvasElement> | undefined;

  context: CanvasRenderingContext2D | undefined;

  ngAfterViewInit(): void {
    this.context = this.canvasElement?.nativeElement.getContext('2d') ?? undefined;
    this.drawShapes();
  }

  private drawShapes() {
    if (this.context) {
      for (const shape of this._shapes) {
        shape.draw(this.context);
      }
    }
  }

}
