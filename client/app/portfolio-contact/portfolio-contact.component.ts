import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
