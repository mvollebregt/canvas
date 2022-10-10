import { Shape } from "./shape";

export class ScaledPositionEvent {

  readonly scaledX: number;
  readonly scaledY: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    evt: MouseEvent
  ) {
    this.scaledX = Shape.scaleX(ctx, evt.x);
    this.scaledY = Shape.scaleY(ctx, evt.y);
  }
}
