import { Component, OnInit, ElementRef } from '@angular/core';
import { MapService } from 'src/app/map/service/map.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  animations: [
    trigger('sidePanelAnimation', [
      state('chevron_left', style({
        transform: 'translateX(95%)'
      })),
      state('chevron_right', style({
        transform: 'translateX(0)'
      })),
      transition('*=>*', animate('150ms')),
    ]),
  ]
})
export class MapPageComponent implements OnInit {

  width=30;
  closeOpen="chevron_right";

  constructor(public mapService: MapService) { }

  ngOnInit(): void {
  }

  panTo(coord) {
    this.mapService.panTo(coord)
  }

  onDrag(event) {
      var pageWidth = document.getElementById('page').offsetWidth;
      var width = 100*(pageWidth-event.pointerPosition.x)/pageWidth;
      this.width = width;
  }

  endDrag() {
    this.mapService.updateSize();
  }

  toggleSidePanel() {
    this.closeOpen = this.closeOpen === "chevron_right" ? "chevron_left" : "chevron_right";
  }
}
