export interface Shape {

  x: number;
  y: number;

  contains(x: number, y: number): boolean;

  draw(ctx: CanvasRenderingContext2D): void;

  erase(ctx: CanvasRenderingContext2D): void;

  move(x: number, y: number): void;

}
