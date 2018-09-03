import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateDemoComponent } from './state-demo.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { ResponsiblePersonComponent } from './responsible-person/responsible-person.component';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StateDemoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoOverviewComponent,
    ResponsiblePersonComponent
]
})
export class StateDemoModule {
  constructor(ngRedux: NgRedux<IAppState>) {
		ngRedux.configureStore(rootReducer, INITIAL_STATE);
	}
 }
