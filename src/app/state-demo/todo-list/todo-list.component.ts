import { ITodo } from '../models/todo';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from "../store";
import { Actions } from "../actions";

@Component({
	selector: 'todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @select((s: IAppState) => s.todos) todos$;
  todos: ITodo[];
  displayedColumns = ['decription', 'responsible', 'priority', 'action'];
  dataSource: any;

	constructor(private ngRedux: NgRedux<IAppState>) { }

	ngOnInit() {
    this.todos$.subscribe((todos) => {
      this.todos = todos;
      this.dataSource = todos;
    });
	}	

	toggleTodo(todo) {
		this.ngRedux.dispatch({type: Actions.TOGGLE_TODO, id: todo.id})
	}

	removeTodo(todo) {
		this.ngRedux.dispatch({type: Actions.REMOVE_TODO, id: todo.id})
  } 

}