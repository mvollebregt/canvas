import { Component, Input, ViewChild } from "@angular/core";
import { Shape } from "../base-canvas/shape";
import { BaseCanvasComponent } from "../base-canvas/base-canvas.component";
import { ShapeEvent } from "../base-canvas/shape-event";

@Component({
  selector: 'app-editable-canvas',
  templateUrl: './editable-canvas.component.html'
})
export class EditableCanvasComponent {

  @Input() shapes: Shape[] = [];
  @ViewChild(BaseCanvasComponent) baseCanvasComponent: BaseCanvasComponent | undefined;

  private triggeringShapeEvent: ShapeEvent | undefined;

  onMouseDownOnShape(evt: ShapeEvent): void {
    this.triggeringShapeEvent = evt;
  }

  onMouseMove(evt: MouseEvent): void {
    if (this.triggeringShapeEvent && this.baseCanvasComponent) {
      const shape = this.triggeringShapeEvent.shape;
      const x = evt.offsetX - this.triggeringShapeEvent.offsetX;
      const y = evt.offsetY - this.triggeringShapeEvent.offsetY;
      this.baseCanvasComponent.transform(shape, () => shape.move(x, y));
    }
  }

  onMouseUp(): void {
    this.triggeringShapeEvent = undefined;
  }
}
