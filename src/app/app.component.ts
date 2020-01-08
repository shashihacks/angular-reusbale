import { Component, ViewChild, ViewContainerRef, AfterContentInit, TemplateRef, AfterViewChecked, OnInit, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { AuthFormComponent } from './test/auth-form/auth-form.component';
import { WidgetService } from './services/widget.service';
import { FormGroup, FormControl } from '@angular/forms';
export interface User {
  email: string,
  password: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  tooltipText: string = "helllo"
  // position: string = 'top'




  // NOTE breadcrumb

  menus: Array<{}> = [
    {
      title: 'Home',
      link: '/home'
    },
    {
      title: 'Library',
      link: '/test'
    },
    {
      title: 'test',
      link: '/test'
    },

  ]
  separator: string =">"
  // backgroundColor: string= 'red'
  // color:string ='white'

//NOTE  snackbar

message: string = "This is a toast message"
displayDuration: number = 5000
animation: boolean = false
animationDuration: number = 250
show: boolean = true
position: string = "bottom-center"

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngAfterViewChecked() {
  }

}
