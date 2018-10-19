import React , { Component , Fragment } from 'react';
import './nowPlaying.css';
import axios from 'axios';
import Loading from '../loading/loading.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import { setSessionStorage , getSessionStorage } from '../../base.js';

class NowPlaying extends Component {
	constructor(){
		super();
		this.state = {
			nowPlayingList : [],
			isLoad : false
		};
	}
	render(){
		return (
			<Fragment>
				{
					this.state.isLoad ? 
					<ReactCSSTransitionGroup transitionName="nowPlayingFade" transitionEnterTimeout={0} transitionLeaveTimeout={0} transitionAppear={true} transitionAppearTimeout={0}>
						<div className="list">
							<ul>
								{
									this.state.nowPlayingList.map((item,index)=>{
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

		var nowPlayingStorage = getSessionStorage('nowPlaying');

		if(nowPlayingStorage){     //从第二次开始，都是走缓存的数据
			this.setState({
				nowPlayingList : JSON.parse(nowPlayingStorage),
				isLoad : true
			});
		}
		else{    //请求的第一次，去服务器上取数据

			axios.get('/v4/api/film/now-playing',{
				params : {
					page : 1,
					count : 7
				}
			}).then((res)=>{
				if( res.data.msg === 'ok' ){
					var films = res.data.data.films;
					this.setState({
						nowPlayingList : films,
						isLoad : true
					});
					setSessionStorage('nowPlaying', JSON.stringify(films));	
				}
			});

		}
	}
}

export default NowPlaying;