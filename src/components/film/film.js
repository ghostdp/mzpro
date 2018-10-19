import React , { Component } from 'react';
import './film.css';
import { Route , NavLink , Switch , Redirect } from 'react-router-dom';
import NowPlaying from '../nowPlaying/nowPlaying.js';
import ComingSoon from '../comingSoon/comingSoon.js';
import { setScroll } from '../../base.js';
import { connect } from 'react-redux';

class FilmUI extends Component {
	render(){
		return (
			<div id="mz_film">
				<div className="tab">
					<div><NavLink to="/film/nowPlaying">正在上映</NavLink></div>
					<div><NavLink to="/film/comingSoon">即将上映</NavLink></div>
				</div>
				
				<Switch>
					<Route path="/film/nowPlaying" component={ NowPlaying } />
					<Route path="/film/comingSoon" component={ ComingSoon } />
					<Redirect from="/film" to="/film/nowPlaying" />
				</Switch>
			</div>
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

var Film = connect(mapStateToProps , mapDispatchToProps)(FilmUI);

export default Film;