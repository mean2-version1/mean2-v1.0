import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import 'hammerjs';
import * as $ from 'jquery';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioExperienceComponent } from './portfolio-experience/portfolio-experience.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PortfolioHomeComponent
  },
  {
    path: 'experience',
    component: PortfolioExperienceComponent
  },
  {
    path: 'contact',
    component: PortfolioContactComponent
  },
  {
    path: 'about',
    component: PortfolioAboutComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHomeComponent,
    PortfolioAboutComponent,
    PortfolioExperienceComponent,
    PortfolioContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    MaterialModule.forRoot(), // <--Add this
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]

})
export class AppModule { }
