import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCanvasComponent } from './base-canvas/base-canvas.component';
import { EditableCanvasComponent } from "./editable-canvas/editable-canvas.component";


@NgModule({
  declarations: [
    BaseCanvasComponent,
    EditableCanvasComponent
  ],
  exports: [
    BaseCanvasComponent,
    EditableCanvasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CanvasModule {}
