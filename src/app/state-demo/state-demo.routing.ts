import { StateDemoComponent } from './state-demo.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const stateDemoRoutes:Route[] = [
  { path: '', component: StateDemoComponent }
];


@NgModule({
  imports: [RouterModule.forChild(stateDemoRoutes)],
  exports:[RouterModule]
})
export class StateDemoRoutingModule { }

