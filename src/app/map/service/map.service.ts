import { Injectable } from '@angular/core';
import { MapMarker } from '../models/map-marker';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public panTo_: Subject<Number[]> = new Subject();
  public addMarker_: Subject<MapMarker> = new Subject();
  public resize_: Subject<any> = new Subject();

  panRequest;

  centre = [134, -26]
  markers: { [text: string]: MapMarker } = {}

  constructor() { 
    this.addMarker([151.2093, -33.8688], "Sydney", "q");
    this.addMarker([138.6007, -34.928], "Adelaide", "e");
    this.addMarker([115.8605, -31.9505], "Perth", "e");

  }

  public addMarker(coord: Number[], text: string, type: string) {
    this.markers[text] = {
      coord: coord,
      text: text,
      type: type,
      timestamp: new Date().getTime()
    }
    this.addMarker_.next(this.markers[text]);
  }

  public panTo(coord: Number[]) {
    this.panTo_.next(coord);
    this.panRequest = coord;
  }

  public updateSize() {
    this.resize_.next();
  }
}
