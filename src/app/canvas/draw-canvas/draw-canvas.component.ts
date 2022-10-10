import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Shape } from "../../model/shape";
import { ShapeEvent } from "../../model/shape-event";
import { ScaledPositionEvent } from "../../model/scaled-position-event";

@Component({
  selector: 'app-draw-canvas',
  templateUrl: './draw-canvas.component.html'
})
export class DrawCanvasComponent implements AfterViewInit {

  @ViewChild('canvasElement') canvasElement: ElementRef<HTMLCanvasElement> | undefined;

  @Output() mouseDownOnShape = new EventEmitter<ShapeEvent>();
  @Output() mouseMoveScaled = new EventEmitter<ScaledPositionEvent>();

  @Input() set shapes(shapes: Shape[]) {
    this._shapes = shapes;
    this.drawShapes();
  };

  get shapes() {
    return this._shapes;
  }

  private _shapes: Shape[] = [];
  private ctx: CanvasRenderingContext2D | undefined;

  move(shape: Shape, scaledX: number, scaledY: number): void {
    if (this.ctx) {
      shape.move(this.ctx, scaledX, scaledY);
      this.drawShapes();
    }
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvasElement?.nativeElement.getContext('2d') ?? undefined;
    this.drawShapes();
  }

  onMouseDown(evt: MouseEvent): void {
    const shape = this.findShapeForEvent(evt);
    if (this.ctx && shape) {
      this.mouseDownOnShape.emit(new ShapeEvent(this.ctx, evt, shape));
    }
  }

  onMouseMove(evt: MouseEvent): void {
    if (this.ctx) {
      this.mouseMoveScaled.emit(new ScaledPositionEvent(this.ctx, evt));
    }
  }

  private drawShapes() {
    if (this.ctx) {
      for (const shape of this._shapes) {
        shape.draw(this.ctx);
      }
    }
  }

  private findShapeForEvent(evt: MouseEvent): Shape | undefined {
    return this.shapes.find(shape => this.contains(shape, evt));
  }

  private contains(shape: Shape, evt: MouseEvent): boolean {
    return this.ctx ? shape.contains(Shape.scaleX(this.ctx, evt.x), Shape.scaleY(this.ctx, evt.y)) : false;
  }
}
