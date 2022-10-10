import { Shape } from "../model/shape";

export class Drag {

  readonly dragOffsetX: number;
  readonly dragOffsetY: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    evt: MouseEvent,
    public readonly shape: Shape
  ) {
    this.dragOffsetX = Shape.scaleX(ctx, evt.x) - shape.scaledX;
    this.dragOffsetY = Shape.scaleY(ctx, evt.y) - shape.scaledY;
  }

  dragTo(ctx: CanvasRenderingContext2D, evt: MouseEvent) {
    const newScaledX: number = Shape.scaleX(ctx, evt.x) - this.dragOffsetX;
    const newScaledY: number = Shape.scaleY(ctx, evt.y) - this.dragOffsetY;
    this.shape.move(ctx, newScaledX, newScaledY);
  }
}
