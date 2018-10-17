import React , { Component } from 'react';
import './nowPlaying.css';
import axios from 'axios';

class NowPlaying extends Component {
	constructor(){
		super();
		this.state = {
			nowPlayingList : []
		};
	}
	render(){
		return (
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
		);
	}
	componentDidMount(){
		axios.get('/v4/api/film/now-playing',{
			params : {
				page : 1,
				count : 7
			}
		}).then((res)=>{
			if( res.data.msg === 'ok' ){
				var films = res.data.data.films;
				this.setState({
					nowPlayingList : films
				});	
			}
		});
	}
}

export default NowPlaying;