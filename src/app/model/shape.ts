export abstract class Shape {

  protected constructor(private _scaledX: number, private _scaledY: number) {
  }

  get scaledX(): number {
    return this._scaledX;
  }

  get scaledY(): number {
    return this._scaledY;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;

  abstract erase(ctx: CanvasRenderingContext2D): void;

  abstract contains(scaledX: number, scaledY: number): boolean;

  move(ctx: CanvasRenderingContext2D, scaledX: number, scaledY: number): void {
    this.erase(ctx);
    this._scaledX = scaledX;
    this._scaledY = scaledY;
    this.draw(ctx);
  }

  static scaleX(ctx: CanvasRenderingContext2D, realX: number): number {
    return realX / ctx.canvas.clientWidth * 100;
  }

  static scaleY(ctx: CanvasRenderingContext2D, realY: number): number {
    return realY / ctx.canvas.clientHeight * 100;
  }

  protected static unscaleX(ctx: CanvasRenderingContext2D, realX: number): number {
    return realX / 100 * ctx.canvas.clientWidth;
  }

  protected static unscaleY(ctx: CanvasRenderingContext2D, realY: number): number {
    return realY / 100 * ctx.canvas.clientHeight;
  }

}
