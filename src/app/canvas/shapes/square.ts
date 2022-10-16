import { Shape } from "../base-canvas/shape";
import { TransformationType } from "../base-canvas/transformation-type";

export class Square implements Shape {

  private static readonly resizeAreaSize = 10;

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number) {
  }

  contains(scaledX: number, scaledY: number): boolean {
    return this.x < scaledX && scaledX < this.x + this.width && this.y < scaledY && scaledY < this.y + this.height;
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

  transformationForMouseOnX(x: number): TransformationType {
    return x < Square.resizeAreaSize ? TransformationType.resizeStart
      : this.width - x < Square.resizeAreaSize ? TransformationType.resizeEnd
        : TransformationType.move;
  }

  transformationForMouseOnY(y: number): TransformationType {
    return y < Square.resizeAreaSize ? TransformationType.resizeStart
      : this.height - y < Square.resizeAreaSize ? TransformationType.resizeEnd
        : TransformationType.move;
  }

  transform(x: number, y: number, width: number, height: number): void {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  private drawOrErase(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}
