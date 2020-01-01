import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'sk-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input('menus') menus 
  @Input('backgroundColor') backgroundColor: string
  @Input('color') color: string
  @Input('separtor') separtor: string
  constructor() { }

  ngOnInit() {
    console.log(this.menus)

  }

}
