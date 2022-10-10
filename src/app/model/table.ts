import { Shape } from "./shape";

export class Table extends Shape {

  constructor(private x: number, private y: number, private width: number, private height: number) {
    super();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.canvas.clientWidth;
    ctx.canvas.clientHeight;

    ctx.beginPath();
    ctx.rect(
      this.transformX(ctx, this.x),
      this.transformY(ctx, this.y),
      this.transformX(ctx, this.width),
      this.transformY(ctx, this.height));
    ctx.stroke();
  }
}
