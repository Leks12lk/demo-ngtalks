import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core/ngx-formly-core';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from "../store";
import { ITodo } from "../models/todo";
import { Actions } from "../actions";

@Component({
	selector: 'todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
	constructor(private ngRedux: NgRedux<IAppState>) { }

	ngOnInit() {
	}

	priorities = [
		{
			value: 'low',
			label: 'Low'
		},
		{
			value: 'medium',
			label: 'Medium'
		},
		{
			value: 'high',
			label: 'High'
		}
	];

	model: ITodo = {
		id: 0,
		isCompleted: false,
		priority: "",
		responsible: "",
		description: ""
	}

	form = new FormGroup({});	

	fields: FormlyFieldConfig[] = [
		{
			key: 'description',
			type: 'input',
			templateOptions: {
				required: true,
				label: 'Description',
			}
		},
		{
			key: 'responsible',
			type: 'input',
			templateOptions: {
				required: true,
				label: 'Responsible',
			}
		},
		{
			key: 'priority',
			type: 'select',
			templateOptions: {
				label: 'Prority',
				required: true,
				options: this.priorities
			}
		}
	];

	submit(addTodoForm: any) {
		this.addTodo();
		addTodoForm.reset();
	}

	private addTodo() {
		this.ngRedux.dispatch({ type: Actions.ADD_TODO, todo: this.model })
	}

}
