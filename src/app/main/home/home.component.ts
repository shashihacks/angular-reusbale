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



  //NOTE  For rating

  stars: number = 5
  color: string = "orange"

  hello = "hell"













  // NOTE Tooltip

  public dances = [
    {
      danceName: "Tango",
      description: "Tango is a partner dance which originated in the 1880s along the River Plate, the natural border between Argentina and Uruguay."
    },
    {
      danceName: "Flamenco",
      description: "Flamenco is a Spanish art form made up of three parts: guitar playing ('guitarra'), song ('cante'), and dance ('baile')."
    },
    {
      danceName: "Pasodoble",
      description: "Pasodoble (Spanish: double step) is Spanish a dance that emulates the movements of a bullfight."
    }
  ];





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
