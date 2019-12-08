import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sk-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input('stars') stars : number 
  starArray:Array<any>
  @Input('color') color : string
  @Input('rating') rating: number 
  @Output() getRating = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
    this.starArray = [...Array(this.stars).keys()]
    console.log("rating loaded", this.rating)
  }

  rate(number) {
    this.rating=number
    this.getRating.emit(number)
  }
  onMouseEnter(number){
    this.rating = number
  
  }

}
