import { Component, OnInit, ViewChild, TemplateRef, AfterContentInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';
import { Dropdown } from 'src/app/models/dropdown';
import { PeriodicElement } from 'src/app/models/table';

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



  //NOTE for table

  dataSource: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }, { position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 6, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 7, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 8, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },

  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];









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



  // NOTE Toast message
  message: string = "This is a toast message"
  displayDuration: number = 5000
  animation: boolean = false
  animationDuration: number = 250
  show: boolean = true
  position: string = "bottom-center"

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
