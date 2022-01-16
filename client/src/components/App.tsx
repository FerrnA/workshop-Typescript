import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {User, fetchUsers} from '../actions';
import {StoreState} from '../reducers';


interface AppProps {
	users: User[];
	fetchUsers(): any;
}

function App(props: AppProps) {
	useEffect(() => {
		props.fetchUsers();
	}, [props]);

	return (
		<div>
			<button onClick={props.fetchUsers}>FETCH USERS!</button>
			{props.users.map((user: User) => {
				return (
				<div key={user.id}>
					{user.id}) {user.name}
				</div>
				);
			})}
		</div>
	)
};

const mapStateToProps = (state: StoreState): {users: User[]} => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, {fetchUsers})(App);