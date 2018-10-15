import React , { Component , Fragment } from 'react';
import './nav.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

class NavUI extends Component {
	render(){
		return (
			<Fragment>
				<ReactCSSTransitionGroup transitionName="navFade" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
					{
						this.props.navShow &&
						<div id="mz_menu" onTouchStart={ this.props.navShowDis }> 
							<ul>
								<li><NavLink to="/home">首页<i className="iconfont icon-more"></i></NavLink></li>
								<li><NavLink to="/film">影片<i className="iconfont icon-more"></i></NavLink></li>
								<li><NavLink to="">影院<i className="iconfont icon-more"></i></NavLink></li>
								<li><NavLink to="">商城<i className="iconfont icon-more"></i></NavLink></li>
								<li><NavLink to="">我的<i className="iconfont icon-more"></i></NavLink></li>
								<li><NavLink to="">卖座卡<i className="iconfont icon-more"></i></NavLink></li>
							</ul>
						</div>
					}
				</ReactCSSTransitionGroup>
			</Fragment>
		);
	}
}

function mapStateToProps(state){
	return {
		navShow : state.navShow
	};
}
function mapDispatchToProps(dispatch){
	return {
		navShowDis(){
			dispatch({ type : 'CHANGE_NAVSHOW' , payload : false });
		}
	};
}

var Nav = connect(mapStateToProps , mapDispatchToProps)(NavUI);

export default Nav;