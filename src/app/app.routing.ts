import { StateDemoComponent } from './state-demo/state-demo.component';
import { formsDemoRoutes } from './forms-demo/forms-demo.routing';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { stateDemoRoutes } from "./state-demo/state-demo.routing";

const routes: Routes = [
	{
		path: 'forms', component: FormsDemoComponent,
		children: formsDemoRoutes
	},
	{
		path: 'state', component: StateDemoComponent,
		children: stateDemoRoutes
	},	
	{
		path: '**',
		redirectTo: '/forms',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
