import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider'
import { MapComponent } from './components/map/map.component';
import { MapService } from './service/map.service';
import { MapMarkersComponent } from './components/map-markers/map-markers.component';



@NgModule({
  declarations: [MapComponent, MapMarkersComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  providers: [
    MapService
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
