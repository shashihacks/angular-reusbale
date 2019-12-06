import { Component, OnInit, ViewChild, TemplateRef, AfterContentInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';
import { Dropdown } from 'src/app/models/dropdown';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit, AfterViewInit {
  components: Array<Object>
  // For dropdown
  data = ['India', 'spain', 'germany', 'Italy']
  icon = "envelope-open"
  // data = [{name: "india", icon: this.icon}, {name:"Spani", icon:this.icon}]
  // color = "primary"
  disabled = false
  name = "Dropdown"



  // For rating

  stars: number= 5
  color:string="orange"



  constructor(private widgetService: WidgetService) { }

  ngOnInit() {

    this.components = this.widgetService.getReusableComponents()
    console.log(this.components)
  }
  ngAfterContentInit() {

  }
  ngAfterViewInit() {
  }

  getRating(value) {
    console.log(value)
  }
}
