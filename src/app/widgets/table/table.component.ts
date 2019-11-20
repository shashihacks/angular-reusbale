import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('dataSource') dataSource
  @Input('displayedColumns') displayedColumns
  @Input('pageSizeOptions') pageSizeOptions
  @Input('pageItems') pageItems
  pageAttributes:Object
 
  activePage:number = 1;  
  // totalRecords

  constructor() { }

  ngOnInit() {
    console.log(this.dataSource)
    console.log(this.pageSizeOptions)
  }
  
  displayActivePage(pageAttributes){  
    this.activePage = pageAttributes['activePage'] 
    this.pageAttributes = pageAttributes
    console.log(pageAttributes)

  }

}
