import { Injectable } from '@angular/core';
import { MapMarker } from '../models/map-marker';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public panTo_: Subject<Number[]> = new Subject();
  public addMarker_: Subject<MapMarker> = new Subject();

  panRequest;

  centre = [134, -26]
  markers: { [text: string]: MapMarker } = {}

  constructor() { 
    this.addMarker([151.2093, -33.8688], "Sydney");
    this.addMarker([138.6007, -34.928], "Adelaide");
    this.addMarker([115.8605, -31.9505], "Perth");
  }

  public addMarker(coord: Number[], text: string) {
    this.markers[text] = {
      coord: coord,
      text: text,
      timestamp: new Date().getTime()
    }
    this.addMarker_.next(this.markers[text]);
  }

  public panTo(coord: Number[]) {
    this.panTo_.next(coord);
    this.panRequest = coord;
  }
}
