import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/map/service/map.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
  }

  panTo(coord) {
    this.mapService.panTo(coord)
  }

}
