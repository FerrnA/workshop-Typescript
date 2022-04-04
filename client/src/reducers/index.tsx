import {combineReducers} from 'redux';
import {usersReducer} from './users';
import {User} from '../actions/index';

export interface StoreState {
	users: User[]
}

export const reducers = combineReducers< StoreState >({
	users: usersReducer
});

/* interface stateI {
	counter: number;
}

const initialState: stateI = {
	counter: 1,
};

interface actionI {
	type: string;
} */

/* export default function reducer(state: stateI = initialState, action: actionI) {
	return state;
} */