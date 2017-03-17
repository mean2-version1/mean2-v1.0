import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
declare var jQuery: any;

@Component({
  selector: 'app-portfolio-about',
  templateUrl: './portfolio-about.component.html',
  styleUrls: ['./portfolio-about.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },6000);
      });
    });
  }

}
