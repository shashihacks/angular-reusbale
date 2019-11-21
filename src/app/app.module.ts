import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './widgets/table/table.component';
import { PaginatorComponent } from './widgets/paginator/paginator.component';
import { HomeComponent } from './main/home/home.component';
import { TableStateComponent } from './widgets/table-state/table-state.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginatePipe } from './pipes/paginate.pipe';
import { ContentProjectionComponent } from './test/content-projection/content-projection.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginatorComponent,
    HomeComponent,
    TableStateComponent,
    PaginatePipe,
    ContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
