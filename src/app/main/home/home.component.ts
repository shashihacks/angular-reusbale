import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  components:Array<Object>
  constructor(private widgetService:WidgetService) { }

  ngOnInit() {
   this.components = this.widgetService.getReusableComponents()
    console.log(this.components)
  }

  
}
