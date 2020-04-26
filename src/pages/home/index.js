import React, { Component } from 'react';
import Header from './../../components/Header';
import './styles.css';
import Example from './../../components/UpcomingMoviesList';
class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<Example />
			</div>
		)
	}
}

export default Home;