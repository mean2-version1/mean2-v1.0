import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
