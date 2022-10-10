export abstract class Shape {

  abstract draw(ctx: CanvasRenderingContext2D): void;

  protected transformX(ctx: CanvasRenderingContext2D, x: number): number {
    return x / 100 * ctx.canvas.clientWidth;
  }

  protected transformY(ctx: CanvasRenderingContext2D, y: number): number {
    return y / 100 * ctx.canvas.clientHeight;
  }

}
