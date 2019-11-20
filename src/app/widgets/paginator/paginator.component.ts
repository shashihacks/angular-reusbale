import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 0;
  @Output() onPageChange: EventEmitter<Object> = new EventEmitter();

  public pages: number[] = [];
  pageAttributes: Object = { activePage: '', start: '', end: '' }
  constructor() { }

  ngOnChanges() {
    const pageCount = this.pageCount()
    this.pages = this.getArrayOfPages(pageCount)
    this.pageAttributes['activePage'] = 1;
    this.onPageChange.emit(this.pageAttributes)
  }
  getArrayOfPages(pageCount): number[] {
    let pageArray: number[] = [];

    if (pageCount > 0) {
      for (var i = 1; i <= pageCount; i++) {
        pageArray.push(i);
      }
    }

    return pageArray;
  }
  pageCount() {
    let totalPages: number = 0;
    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);

      totalPages = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }

    return totalPages;

  }
  onClickPage(pageNumber: number) {
    if (pageNumber < 1) return;
    if (pageNumber > this.pages.length) return;
    this.pageAttributes['activePage'] = pageNumber;
    // for(let i=0;i< this.getArrayOfPages(this.pageCount).length; i++) {
      this.pageAttributes['end'] = 4
      this.pageAttributes['start']=this.pageAttributes['end']-2;

    
    this.onPageChange.emit(this.pageAttributes);

  }

  ngOnInit() {
  }

}
