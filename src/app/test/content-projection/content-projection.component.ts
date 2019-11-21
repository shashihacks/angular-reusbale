import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {
  @Input() name :string;
  constructor() { }

  ngOnInit() {
    console.log(this.name)
  }

}
