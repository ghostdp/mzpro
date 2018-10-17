import React , { Component } from 'react';
import './detail.css';
import axios from 'axios';

class Detail extends Component {
	constructor(){
		super();
		this.state = {
			detailData : {}
		};
	}
	render(){
		
		var { cover , director , language , category , premiereAt , synopsis , actors } = this.state.detailData;

		return (
			<div id="mz_detail">
				<div className="banner"><img src={cover && cover.origin} alt="" /></div>
				<div className="info">
					<h2>影片简介</h2>
					<dl>
						<dt>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
						<dd>{ director }</dd>
					</dl>
					<dl>
						<dt>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</dt>
						<dd>
							{
								actors && actors.map((item,index)=>{
									if( index === 0 ){
										return item.name;	
									}
									else{
										return ' | ' + item.name ;
									}
								})
							}
						</dd>
					</dl>
					<dl>
						<dt>地区语言：</dt>
						<dd>{ language }</dd>
					</dl>
					<dl>
						<dt>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</dt>
						<dd>{ category }</dd>
					</dl>
					<dl>
						<dt>上映日期：</dt>
						<dd>{ premiereAt }</dd>
					</dl>
					<p>{ synopsis }</p>
				</div>
			</div>
		);
	}
	componentDidMount(){
		var mid = this.props.match.params.mid;
		axios.get('/v4/api/film/'+mid).then((res)=>{
			if(res.data.msg === 'ok'){
				var film = res.data.data.film;
				this.setState({
					detailData : film
				});
			}
		});
	}
}

export default Detail;