import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSidenav } from '@angular/material/sidenav';
import { NotificationsService } from '../../service/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('settingsAnimation', [
      state('open', style({
        transform: 'rotate(-90deg)'
      })),
      state('close', style({
        transform:'rotate(90deg)'
      })),
      transition('*=>*', animate('300ms')),
    ]),
  ]
})
export class NotificationsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  isOpen = false;

  constructor(public notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidenav.toggle();
    this.isOpen = !this.isOpen;
  }

  typeClicked(type) {
    var checked = !this.notificationService.subscriptions[type].checked;
      for(let key in this.notificationService.subscriptions[type].types) {
        this.notificationService.subscriptions[type].types[key] = checked;
      }
  }

  subtypeClicked(type, subtype) {
    var a = Object.entries(this.notificationService.subscriptions[type].types)
    var b = a.map(e => e[0] === subtype ? !e[1] : e[1])
    this.notificationService.subscriptions[type].checked = b.some(e => e)
  }
}
