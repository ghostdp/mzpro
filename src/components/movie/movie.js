import React , { Component } from 'react';
import './movie.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Movie extends Component {
	constructor(){
		super();
		this.state = {
			movieList : []
		};
		this.isMove = false;
		this.handleTouchMove = this.handleTouchMove.bind(this);
		this.handleTouchEnd = this.handleTouchEnd.bind(this);
	}
	render(){
		return (
			<div id="mz_movie">
				<ul>
					{
						this.state.movieList.map((item,index)=>{
							return (
								<li onTouchMove={ this.handleTouchMove } onTouchEnd={ ()=>{ this.handleTouchEnd(item.id) } } key={item.id}>
									<img src={item.cover.origin} alt="" />
									<div className="info">
										<div className="title">
											<p>{item.name}</p>
											<p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
										</div>
										<div className="score">{item.grade}</div>
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
				count : 5
			}
		}).then((res)=>{
			if( res.data.msg === 'ok' ){
				var films = res.data.data.films;
				this.setState({
					movieList : films
				});	
			}
		});
	}
	handleTouchEnd(mid){
		if(this.isMove){
			this.isMove = false;
		}
		else{
			//编程式路由
			//this.props.history.push('/detail/' + mid + '?username=xiaoming');
			//this.props.history.push('/detail/' + mid , { username : 'xiaoming' });
			this.props.history.push('/detail/' + mid);
		}
	}
	handleTouchMove(){
		this.isMove = true;
	}

}

export default withRouter(Movie);