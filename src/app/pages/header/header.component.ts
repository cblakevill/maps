import { Component, OnInit } from '@angular/core';
import { pages } from '../pages'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public pages = pages;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate(page) {
    this.router.navigate([page])
  }
}
