import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	componentDidMount() {
		// console.log(this.props.store.getState())
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => this.setState({robots: users}))
		this.props.onRequestRobots();
	}

	// function inside of a component, use arrow function so that 'this' may refer to 'App' instead of the function itself
	
	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		// includes () determines if a string contains the characters of a specific string.
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return isPending?
			<h1>Loading</h1>:
		(
			<div className='tc'>
				<h1 className='f1'>Search Your Robot</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={ filteredRobots } />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
	
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);