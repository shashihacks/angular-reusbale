import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-table-state',
  templateUrl: './table-state.component.html',
  styleUrls: ['./table-state.component.scss']
})
export class TableStateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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


}
