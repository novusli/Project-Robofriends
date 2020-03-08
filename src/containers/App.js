import React, {Component} from 'react';
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {							//state is similar with props
			robots: [],						//robots is from { robots } in robots.js
			searchfield: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
	}

	// function inside of a component, use arrow function so that 'this' may refer to 'App' instead of the function itself
	onSearchChange=(event)=> {
		this.setState({searchfield: event.target.value})
	}

	
	render() {
		const { robots, searchfield } = this.state;
		// includes () determines if a string contains the characters of a specific string.
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length?
			<h1>Loading</h1>:
		(
			<div className='tc'>
				<h1 className='f1'>Search Your Robot</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={ filteredRobots } />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
	
}

export default App;