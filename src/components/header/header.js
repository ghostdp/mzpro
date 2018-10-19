import React , { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HeaderUI extends Component {
	render(){
		return (
			<div id="mz_head">
				<div className="menu" onTouchStart={()=>{ this.props.navShowDis(this.props.navShow) }}><i className="iconfont icon-category"></i></div>
				<div className="title">{ this.props.movieTitle }</div>
				<div className="city"><Link to="/city">哈尔滨 <i className="iconfont icon-moreunfold"></i></Link></div>
				<div className="user"><i className="iconfont icon-account"></i></div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		navShow : state.navShow,
		movieTitle : state.movieTitle
	};
}
function mapDispatchToProps(dispatch){
	return {
		navShowDis(previousNavShow){
			dispatch({ type : 'CHANGE_NAVSHOW' , payload : !previousNavShow });
		}
	};
}

var Header = connect(mapStateToProps , mapDispatchToProps)(HeaderUI);

export default Header;