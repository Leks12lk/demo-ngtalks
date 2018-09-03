import { SharedModule } from '../shared/shared.module';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';

import { StateDemoComponent } from './state-demo.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';


@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    SharedModule,
    FormlyModule.forRoot({
			validationMessages: [
				{ name: 'required', message: 'This field is required' },
			],
		}),
		FormlyMaterialModule 
  ],
  declarations: [
    StateDemoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoOverviewComponent
]
})
export class StateDemoModule {
  constructor(ngRedux: NgRedux<IAppState>) {
		ngRedux.configureStore(rootReducer, INITIAL_STATE);
	}
 }
