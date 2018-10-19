import React , { Component , Fragment } from 'react';
import './comingSoon.css';
import axios from 'axios';
import Loading from '../loading/loading.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import { setSessionStorage , getSessionStorage } from '../../base.js';

class ComingSoon extends Component {
	constructor(){
		super();
		this.state = {
			comingSoonList : [],
			isLoad : false
		};
	}
	render(){
		return (
			<Fragment>
				{
					this.state.isLoad ? 
					<ReactCSSTransitionGroup transitionName="comingSoonFade" transitionEnterTimeout={0} transitionLeaveTimeout={0} transitionAppear={true} transitionAppearTimeout={0}>
						<div className="list">
							<ul>
								{
									this.state.comingSoonList.map((item,index)=>{
										return (
											<li key={item.id}>
												<div className="img"><img src={item.poster.thumbnail} alt="" /></div>
												<div className="info">
													<p><span>{item.name}</span><span>{item.grade}<i className="iconfont icon-moreunfold"></i></span></p>
													<p>{item.intro}</p>
													<p><span>{item.cinemaCount}家影院上映</span><span>{item.watchCount}人购票</span></p>
												</div>
											</li>
										);
									})
								}
							</ul>
						</div>
					</ReactCSSTransitionGroup>
					:
					<Loading />
				}
				
			</Fragment>
		);
	}
	componentDidMount(){
		
		var comingSoonStorage = getSessionStorage('comingSoon');

		if(comingSoonStorage){     //从第二次开始，都是走缓存的数据
			this.setState({
				comingSoonList : JSON.parse(comingSoonStorage),
				isLoad : true
			});
		}
		else{    //请求的第一次，去服务器上取数据

			axios.get('/v4/api/film/coming-soon',{
				params : {
					page : 1,
					count : 7
				}
			}).then((res)=>{
				if( res.data.msg === 'ok' ){
					var films = res.data.data.films;
					this.setState({
						comingSoonList : films,
						isLoad : true
					});	
					setSessionStorage('comingSoon', JSON.stringify(films));	
				}
			});

		}
	}
}

export default ComingSoon;