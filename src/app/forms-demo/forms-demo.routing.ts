import { FormsDemoComponent } from './forms-demo.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const formsDemoRoutes:Route[] = [
  { path: '', component: FormsDemoComponent }  
];


@NgModule({
  imports: [RouterModule.forChild(formsDemoRoutes)],
  exports:[RouterModule]
})
export class FormsDemoRoutingModule { }

