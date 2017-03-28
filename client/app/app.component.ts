import { Component, OnInit } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';


@Component({
  selector: 'app-root',
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor() { }

}
