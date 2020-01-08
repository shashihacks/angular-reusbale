import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/models/table';

@Component({
  selector: 'table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  //NOTE for table

  dataSource: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }, { position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 6, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 7, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 8, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },

  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor() { }

  ngOnInit() {
  }

}
