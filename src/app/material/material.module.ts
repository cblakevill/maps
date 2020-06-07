import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  exports: [
    MatDividerModule,
    MatTabsModule,
    DragDropModule,
    MatIconModule
  ]
})
export class MaterialModule { }
