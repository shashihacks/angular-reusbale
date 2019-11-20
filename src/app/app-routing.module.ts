import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableStateComponent } from './widgets/table-state/table-state.component';


const routes: Routes = [

    { path: 'table', component: TableStateComponent },
    { path: 'paginate', component : TableStateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
