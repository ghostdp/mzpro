import React , { Component , Fragment } from 'react';
import './home.css';
import Banner from '../banner/banner.js';
import Movie from '../movie/movie.js';
import { setScroll } from '../../base.js';
import { connect } from 'react-redux';

class HomeUI extends Component {
	render(){
		return (
			<Fragment>
				<Banner />
				<Movie />
			</Fragment>
		);
	}
	componentWillMount(){
		setScroll(0);
	}
	componentDidMount(){
		this.props.movieTitleDis();
	}
}

function mapStateToProps(state){
	return {};
}
function mapDispatchToProps(dispatch){
	return {
		movieTitleDis(){
			dispatch({ type : 'CHANGE_MOVIETITLE' , payload : '卖座电影' });
		}
	};
}

var Home = connect(mapStateToProps , mapDispatchToProps)(HomeUI);

export default Home;