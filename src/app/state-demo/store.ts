
import { ITodo } from "./models/todo";
import { Actions } from "./actions";

export interface IAppState {
	todos: ITodo[],
	lastUpdate: Date
}

export const INITIAL_STATE: IAppState  = {
	todos: [],
	lastUpdate: null
}

export function rootReducer(state, action) {
	switch(action.type) {
		case Actions.ADD_TODO:
			action.todo.id = state.todos.length + 1;
			return Object.assign({}, state, {
				todos: state.todos.concat(Object.assign({}, action.todo)),
				lastUpdate: new Date()
			})
		case Actions.TOGGLE_TODO:
			var todo = state.todos.find(t => t.id === action.id);
			var index = state.todos.indexOf(todo);
			return Object.assign({}, state, {
				todos: [
					...state.todos.slice(0, index),
					Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
					...state.todos.slice(index+1)
				],
				lastUpdate: new Date()
			})
		case Actions.REMOVE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.filter(t => t.id !== action.id),
				lastUpdate: new Date()
			})
		case Actions.REMOVE_ALL_TODOS:
			return Object.assign({}, state, {
				todos: [],
				lastUpdate: new Date()
			})
	}
	return state;
}