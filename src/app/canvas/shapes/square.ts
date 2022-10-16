import { Shape } from "../base-canvas/shape";

export class Square implements Shape {

  constructor(
    public x: number,
    public y: number,
    public readonly width: number,
    public readonly height: number) {
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    this.drawOrErase(ctx);
  }

  erase(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFF";
    this.drawOrErase(ctx);
  }

  contains(scaledX: number, scaledY: number): boolean {
    return this.x < scaledX && scaledX < this.x + this.width && this.y < scaledY && scaledY < this.y + this.height;
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  private drawOrErase(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}
