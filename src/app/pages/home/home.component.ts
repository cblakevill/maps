import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/map/service/map.service';
import { Router } from '@angular/router';
import { pages } from '../pages'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pages = pages

  constructor(
    private router: Router) { 
   }

  ngOnInit(): void {
  }

  navigate(page) {
    this.router.navigate([page]);
  }
}
