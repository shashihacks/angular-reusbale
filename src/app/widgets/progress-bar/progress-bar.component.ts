import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sk-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input('fill') fill : string 
  @Input('label') label : string
  @Input('height') height : string
  @Input('color') color : string
  @Input('striped') striped : boolean
  @Input('animated') animated : boolean
  constructor() { }

  ngOnInit() {
    console.log(this.fill, this.label, this.height, this.color, this.striped, this.animated)
  }
  getAriaValue() {
    console.log(this.fill.split('%')[0])
    return this.fill.split('%')[0]
  }

}
