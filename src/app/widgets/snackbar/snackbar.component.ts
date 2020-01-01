import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sk-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input('show') show: boolean
  @Input('message') message: string
  @Input('displayDuration') displayDuration: number
  // NOTE fix this
  @Input('animation') animation: boolean = true
  @Input('animationDuration') animationDuration: number
  @Input('position') position : string
  constructor() { }

  ngOnInit() {
    console.log(this.position)
    setTimeout(() => {
      this.show = false
    }, this.displayDuration)
    console.log(this.message, this.displayDuration, this.animation, this.animationDuration)
  }

}
