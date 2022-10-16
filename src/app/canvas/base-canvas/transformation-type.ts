export class TransformationType {

  static readonly resizeStart = new TransformationType(1, -1);
  static readonly move = new TransformationType(1, 0);
  static readonly resizeEnd = new TransformationType(0, 1);
  static readonly none = new TransformationType(0, 0);

  private constructor(
    readonly adjustPosition: 0 | 1,
    readonly adjustSize: -1 | 0 | 1
  ) {
  }
}
