import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ViewPortComponent } from './pages/view-port/view-port.component';
import { HeaderComponent } from './pages/header/header.component';
import { ChatModule } from './chat/chat.module';
import { NotificationsModule } from './notifications/notifications.module';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    HomeComponent,
    ViewPortComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    MapModule,
    ChatModule,
    NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
