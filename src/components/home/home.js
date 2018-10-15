import React , { Component , Fragment } from 'react';
import './home.css';
import Banner from '../banner/banner.js';
import Movie from '../movie/movie.js';

class Home extends Component {
	render(){
		return (
			<Fragment>
				<Banner />
				<Movie />
			</Fragment>
		);
	}
}

export default Home;