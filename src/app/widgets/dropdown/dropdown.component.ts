import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'sk-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})


export class DropdownComponent implements OnInit {
  @Input('data') data: Array<string>
  @Input('color') color: string
  @Input('disabled') disabled: boolean
  @Input('name') name: string
  @Input('icon') icon: string

  constructor() { }

  ngOnInit() {
    console.log(this.data, this.color)
  }
  getColor() {
    if(this.color === undefined) 
      return "btn-primary"  
    else
      return (('btn-'+this.color).toString())
  }


}
