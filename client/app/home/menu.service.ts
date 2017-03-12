import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class MenuService {

  menu = [
    {
      "title": "Demo",
      "sub": [
        {
          "title": "REST",
          "link": "posts"
        },
        {
          "title": "Chat",
          "link": "chat"
        },
        {
          "title": "Form",
          "link": "form"
        }
      ]
    }
  ];

  constructor() { }

  getMenu() {
    return Observable.of(this.menu);
  }

}
