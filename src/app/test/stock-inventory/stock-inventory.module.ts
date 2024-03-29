import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
// import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
// import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
// import { StockProductsComponent } from './components/stock-products/stock-products.component';

@NgModule({
  declarations: [
    StockInventoryComponent,
    // StockBranchComponent,
    // StockSelectorComponent,
    // StockProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    StockInventoryComponent
  ]
})
export class StockInventoryModule {}