import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewPortComponent } from './pages/view-port/view-port.component';
import { ChatComponent } from './chat/component/chat.component';
import { MapMarkersComponent } from './map/components/map-markers/map-markers.component';


const routes: Routes = [
  {
    path: '',
    component: ViewPortComponent,
    children: [
      { path: '', component: HomeComponent },
      { 
        path: 'map', 
        component: MapPageComponent,
        children: [
          { path: '', component: MapMarkersComponent },
          { path: 'chat', component: ChatComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
