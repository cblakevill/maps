import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map/component/map.component';
import { MapPageComponent } from './pages/map-page/map-page.component';


const routes: Routes = [
  { path: 'map', component: MapPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
