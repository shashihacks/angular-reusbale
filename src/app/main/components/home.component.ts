import { Component, OnInit, ViewChild, TemplateRef, AfterContentInit, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  components:Array<Object>
  data=["india", "spain","germany","Italy"]

  constructor() { }

  ngOnInit() {
  //  this.components = this.widgetService.getReusableComponents()
  //   console.log(this.components)
  }
  ngAfterContentInit() {
    
  }

  
}
