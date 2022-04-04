import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

const url = 'http://localhost:3001/user';

export interface User {
	id: number;
	name: string;
	lastName: string;
}

export interface FetchUsersAction {
    type: number;
    payload: User[];
  }

export const fetchUsers = () => {
    return async function(dispatch: Dispatch) {
        return await axios.get<User[]>(url)
        .then(json => dispatch<FetchUsersAction>({type: ActionTypes.fetchUsers, payload: json.data}))
    };
}