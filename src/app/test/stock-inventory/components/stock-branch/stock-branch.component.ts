import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent implements OnInit {
  @Input() parent : FormGroup
  constructor() { }

  ngOnInit() {
    console.log(this.parent)
  }

}
