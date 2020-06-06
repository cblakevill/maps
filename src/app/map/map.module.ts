import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './component/map.component';
import { MapService } from './service/map.service';



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MapService
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
