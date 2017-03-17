import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-portfolio-experience',
  templateUrl: './portfolio-experience.component.html',
  styleUrls: ['./portfolio-experience.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
