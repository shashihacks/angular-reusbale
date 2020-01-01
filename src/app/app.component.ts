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
  position: string = 'top'

  // NOTE for progressbar 

  // fill: string = "45%"
  // label: string = this.fill
  // height: string = '20px';
  // color: string = "blue"
  // striped: boolean = false;
  // animated: boolean = false


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

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngAfterViewChecked() {
  }

}
