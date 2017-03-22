
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
declare var jQuery: any;

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
    jQuery(document).ready(function(){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },3000);
      });
    });
  }

}

