import { Shape } from "./shape";

export class ShapeEvent {

  readonly scaledOffsetX: number;
  readonly scaledOffsetY: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    evt: MouseEvent,
    public readonly shape: Shape
  ) {
    this.scaledOffsetX = Shape.scaleX(ctx, evt.x) - shape.scaledX;
    this.scaledOffsetY = Shape.scaleY(ctx, evt.y) - shape.scaledY;
  }
}
