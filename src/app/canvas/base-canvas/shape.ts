import { TransformationType } from "./transformation-type";

export interface Shape {

  x: number;
  y: number;
  width: number;
  height: number;

  contains(x: number, y: number): boolean;

  draw(ctx: CanvasRenderingContext2D): void;

  erase(ctx: CanvasRenderingContext2D): void;

  transformationForMouseOnX(x: number): TransformationType;

  transformationForMouseOnY(y: number): TransformationType;

  transform(x: number, y: number, width: number, height: number): void;

}
