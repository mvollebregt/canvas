import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawCanvasComponent } from './draw-canvas/draw-canvas.component';
import { DragCanvasComponent } from './drag-canvas/drag-canvas.component';


@NgModule({
  declarations: [
    DrawCanvasComponent,
    DragCanvasComponent
  ],
  exports: [
    DrawCanvasComponent,
    DragCanvasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CanvasModule {}
