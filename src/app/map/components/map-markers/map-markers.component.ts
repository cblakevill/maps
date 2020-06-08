import { Component, OnInit } from '@angular/core';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-map-markers',
  templateUrl: './map-markers.component.html',
  styleUrls: ['./map-markers.component.scss']
})
export class MapMarkersComponent implements OnInit {

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
  }

  panTo(coord) {
    this.mapService.panTo(coord)
  }
  
}
