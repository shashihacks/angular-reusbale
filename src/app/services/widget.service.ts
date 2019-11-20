import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  getReusableComponents() {
    return ([
      {
        name:'table',
        link:'/table'
      },
      {
        name:'paginate',
        link:'/paginate'
      }
    ])
  }
}
