import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Shape } from "../model/shape";
import { Drag } from "./drag";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html'
})
export class CanvasComponent implements AfterViewInit {

  private _shapes: Shape[] = [];
  private currentDrag: Drag | undefined;

  get shapes() {
    return this._shapes;
  }

  @Input() set shapes(shapes: Shape[]) {
    this._shapes = shapes;
    this.drawShapes();
  };

  @ViewChild('canvasElement') canvasElement: ElementRef<HTMLCanvasElement> | undefined;

  ctx: CanvasRenderingContext2D | undefined;

  ngAfterViewInit(): void {
    this.ctx = this.canvasElement?.nativeElement.getContext('2d') ?? undefined;
    this.drawShapes();
  }

  private drawShapes() {
    if (this.ctx) {
      for (const shape of this._shapes) {
        shape.draw(this.ctx);
      }
    }
  }

  public onMouseDown(evt: MouseEvent): void {
    const draggedShape = this.shapes.find(shape => this.contains(shape, evt));
    if (this.ctx && draggedShape) {
      this.currentDrag = new Drag(this.ctx, evt, draggedShape);
    }
  }

  private contains(shape: Shape, evt: MouseEvent): boolean {
    return this.ctx ? shape.contains(Shape.scaleX(this.ctx, evt.x), Shape.scaleY(this.ctx, evt.y)) : false;
  }

  public onMouseMove(evt: MouseEvent): void {
    if (this.ctx) {
      this.currentDrag?.dragTo(this.ctx, evt);
    }
  }

  public onMouseUp(): void {
    this.currentDrag = undefined;
  }
}
