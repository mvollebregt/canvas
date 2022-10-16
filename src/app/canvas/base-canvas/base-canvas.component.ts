import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Shape } from "./shape";
import { ShapeEvent } from "./shape-event";

@Component({
  selector: 'app-base-canvas',
  templateUrl: './base-canvas.component.html'
})
export class BaseCanvasComponent implements AfterViewInit {

  @ViewChild('canvasElement') canvasElement: ElementRef<HTMLCanvasElement> | undefined;

  @Output() clickOnShape = new EventEmitter<ShapeEvent>();
  @Output() dblClickOnShape = new EventEmitter<ShapeEvent>();
  @Output() mouseDownOnShape = new EventEmitter<ShapeEvent>();
  @Output() mouseUpOnShape = new EventEmitter<ShapeEvent>();

  @Input() set shapes(shapes: Shape[]) {
    this._shapes = shapes;
    this.drawShapes();
  };

  get shapes() {
    return this._shapes;
  }

  private _shapes: Shape[] = [];
  private ctx: CanvasRenderingContext2D | undefined;

  ngAfterViewInit(): void {
    this.ctx = this.canvasElement?.nativeElement.getContext('2d') ?? undefined;
    this.drawShapes();
  }

  onClick(evt: MouseEvent): void {
    this.emitEventIfOnShape(this.clickOnShape, evt);
  }

  onDblClick(evt: MouseEvent): void {
    this.emitEventIfOnShape(this.dblClickOnShape, evt);
  }

  onMouseDown(evt: MouseEvent): void {
    this.emitEventIfOnShape(this.mouseDownOnShape, evt);
  }

  onMouseUp(evt: MouseEvent): void {
    this.emitEventIfOnShape(this.mouseUpOnShape, evt);
  }

  transform(shape: Shape, x: number, y: number, width: number, height: number): void {
    if (this.ctx) {
      shape.erase(this.ctx);
      shape.transform(x, y, width, height);
      this.drawShapes();
    }
  }

  private drawShapes() {
    if (this.ctx) {
      for (const shape of this._shapes) {
        shape.draw(this.ctx);
      }
    }
  }

  private emitEventIfOnShape(eventEmitter: EventEmitter<ShapeEvent>, evt: MouseEvent) {
    const shape = this.findShapeForEvent(evt);
    if (shape) {
      eventEmitter.emit({
        shape,
        mouseX: evt.x,
        mouseY: evt.y,
        originalX: shape.x,
        originalY: shape.y,
        originalWidth: shape.width,
        originalHeight: shape.height,
        transformX: shape.transformationForMouseOnX(evt.offsetX - shape.x),
        transformY: shape.transformationForMouseOnY(evt.offsetY - shape.y),
      });
    }
  }

  private findShapeForEvent(evt: MouseEvent): Shape | undefined {
    return this.shapes.find(shape => shape.contains(evt.offsetX, evt.offsetY));
  }
}
