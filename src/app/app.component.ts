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
  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngAfterViewChecked() {
  }

}
