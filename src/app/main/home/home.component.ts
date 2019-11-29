import { Component, OnInit, ViewChild, TemplateRef, AfterContentInit, ViewContainerRef } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';
import { Dropdown } from 'src/app/models/dropdown';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  components: Array<Object>
  data = [    'India',    'spain',    'germany',    'Italy'  ]
  color = "primary"
  disabled = false
  name = "Dropdown"
  // icon = "envelope-open"
  // dropDownProps: Dropdown = {
  //   data: [
  //     {
  //       text: 'India',
  //       icon: 'bars'
  //     },
  //     {
  //       text: 'spain',
  //       icon: 'music'
  //     },
  //     {
  //       text: 'germany',
  //       icon: 'envelope-open'
  //     }, {
  //       text: 'Italy',
  //       icon: 'address-book'
  //     },

  //   ],
  //   color: "primary",
  //   disabled: false,
  //   name: "Dropdown",
  //   icon: "envelope-open"

  // }
  // data : Dropdown =["india", "spain","germany","Italy"]
  // color: Dropdown = "primary"

  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
    this.components = this.widgetService.getReusableComponents()
    console.log(this.components)
  }
  ngAfterContentInit() {

  }


}
