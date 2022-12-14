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
      const diffX = evt.x - this.triggeringShapeEvent.mouseX;
      const diffY = evt.y - this.triggeringShapeEvent.mouseY;
      const x = this.triggeringShapeEvent.originalX + this.triggeringShapeEvent.horizontalTransformation.adjustPosition * diffX;
      const y = this.triggeringShapeEvent.originalY + this.triggeringShapeEvent.verticalTransformation.adjustPosition * diffY;
      const width = this.triggeringShapeEvent.originalWidth + this.triggeringShapeEvent.horizontalTransformation.adjustSize * diffX;
      const height = this.triggeringShapeEvent.originalHeight + this.triggeringShapeEvent.verticalTransformation.adjustSize * diffY;
      if (width > shape.minWidth && height > shape.minHeight) {
        this.baseCanvasComponent.transform(shape, x, y, width, height);
      }
    }
  }

  onMouseUp(): void {
    this.triggeringShapeEvent = undefined;
  }
}
