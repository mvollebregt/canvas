import { Shape } from "./shape";
import { TransformationType } from "./transformation-type";

export interface ShapeEvent {
  shape: Shape;
  mouseX: number;
  mouseY: number;
  originalX: number;
  originalY: number;
  originalWidth: number;
  originalHeight: number;
  horizontalTransformation: TransformationType;
  verticalTransformation: TransformationType;
}
