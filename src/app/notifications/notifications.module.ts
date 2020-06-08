import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationsService } from './service/notifications.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'




@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    NotificationsComponent
  ],
  providers: [
    NotificationsService
  ]
})
export class NotificationsModule { }
