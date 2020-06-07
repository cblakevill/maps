import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  exports: [
    MatDividerModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
