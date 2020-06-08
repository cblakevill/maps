import { Injectable } from '@angular/core';
import { notificationTypes } from '../types'

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  public notificationTypes = notificationTypes;
  public subscriptions = {};
  public notifications = [];
  public filtered = [];

  constructor() { 
    notificationTypes.forEach(t => {
      this.subscriptions[t.type] = { checked: true, types: {}}
      t.subtypes.forEach(st => {
        this.subscriptions[t.type].types[st] = true;
      })
    });
    console.log(this.subscriptions)
  }

  addNotification(notification: Notification) {
    this.notifications.push(notification);
  }
}
