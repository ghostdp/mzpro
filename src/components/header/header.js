import React , { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';

class HeaderUI extends Component {
	render(){
		return (
			<div id="mz_head">
				<div className="menu" onTouchStart={()=>{ this.props.navShowDis(this.props.navShow) }}><i className="iconfont icon-category"></i></div>
				<div className="title">卖座电影</div>
				<div className="city">哈尔滨 <i className="iconfont icon-moreunfold"></i></div>
				<div className="user"><i className="iconfont icon-account"></i></div>
			</div>
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
		navShowDis(previousNavShow){
			dispatch({ type : 'CHANGE_NAVSHOW' , payload : !previousNavShow });
		}
	};
}

var Header = connect(mapStateToProps , mapDispatchToProps)(HeaderUI);

export default Header;