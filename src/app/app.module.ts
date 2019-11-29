import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import {FORM_PROVIDERS } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './widgets/table/table.component';
import { PaginatorComponent } from './widgets/paginator/paginator.component';
import { HomeComponent } from './main/home/home.component';
import { TableStateComponent } from './widgets/table-state/table-state.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginatePipe } from './pipes/paginate.pipe';
import { AuthFormComponent } from '../app/test/auth-form/auth-form.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRememberComponent } from './test/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './test/auth-message/auth-message.component';
import { StockInventoryComponent } from './test/stock-inventory/containers/stock-inventory/stock-inventory.component';
import { DropdownComponent } from './widgets/dropdown/dropdown.component';
import { StockBranchComponent } from './test/stock-inventory/components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './test/stock-inventory/components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './test/stock-inventory/components/stock-products/stock-products.component';
import { SkNgDropdownDirective } from './directives/sk-ng-dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginatorComponent,
    HomeComponent,
    TableStateComponent,
    PaginatePipe,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
    DropdownComponent,
    SkNgDropdownDirective

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
     
    // StockInventoryModule

  ],
  schemas: [NO_ERRORS_SCHEMA] // add this line
  ,
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [AuthFormComponent]
})
export class AppModule { }
