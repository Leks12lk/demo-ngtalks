import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { Actions } from "../actions";

@Component({
  selector: 'todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearTodos() {
    this.ngRedux.dispatch({type: Actions.REMOVE_ALL_TODOS})
  }

}
