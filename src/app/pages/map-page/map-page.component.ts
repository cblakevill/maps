import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

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

  views = [
    { route: '/map', icon: 'location_on' },
    { route: '/map/chat', icon: 'live_help' },
    { route: '/map/**', icon: 'notification_important' }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSidePanel() {
    this.closeOpen = this.closeOpen === "chevron_right" ? "chevron_left" : "chevron_right";
  }

  navigate(route) {
    this.router.navigate([route])
  }
}
