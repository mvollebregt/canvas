import { Shape } from "./shape";

export class Square extends Shape {

  constructor(scaledX: number, scaledY: number, private scaledWith: number, private scaledHeight: number) {
    super(scaledX, scaledY);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    this.innerDraw(ctx);
  }

  erase(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFF";
    this.innerDraw(ctx);
  }

  contains(scaledX: number, scaledY: number): boolean {
    return this.scaledX < scaledX && scaledX < this.scaledX + this.scaledWith && this.scaledY < scaledY && scaledY < this.scaledY + this.scaledHeight;
  }

  private innerDraw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(
      Shape.unscaleX(ctx, this.scaledX),
      Shape.unscaleY(ctx, this.scaledY),
      Shape.unscaleX(ctx, this.scaledWith),
      Shape.unscaleY(ctx, this.scaledHeight));
    ctx.stroke();
  }
}
