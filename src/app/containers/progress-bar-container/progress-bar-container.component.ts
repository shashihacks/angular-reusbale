import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sk-progress-bar-container',
  templateUrl: './progress-bar-container.component.html',
  styleUrls: ['./progress-bar-container.component.scss']
})
export class ProgressBarContainerComponent implements OnInit {
  // NOTE for progressbar 

  fill: string = "45%"
  label: string = this.fill
  height: string = '20px';
  color: string = "blue"
  striped: boolean = false;
  animated: boolean = false
  constructor() { }

  ngOnInit() {
  }

}
