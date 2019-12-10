import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sk-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  @Input('message') message: string

@Input('displayDuration') displayDuration: number
@Input('animation') animation : boolean
@Input('animationDuration') animationDuration: string
isVisible: boolean = true
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.isVisible = false
    }, this.displayDuration)
    console.log(this.message, this.displayDuration, this.animation, this.animationDuration)
  }

}
