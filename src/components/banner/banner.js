import React , { Component } from 'react';
import './banner.css';
import axios from 'axios';

class Banner extends Component {
	constructor(){
		super();
		this.state = {
			bannerList : []
		};
	}
	render(){
		return (
			<div id="mz_banner" className="swiper-container">
				<ul className="swiper-wrapper">
					{
						this.state.bannerList.map((item,index)=>{
							return <li key={item.id} className="swiper-slide"><img src={item.imageUrl} alt="" /></li>;
						})
					}
				</ul>
				<div id="mz_pagination" className="swiper-pagination"></div>
			</div>
		);
	}
	componentDidMount(){
		axios.get('/v4/api/billboard/home').then((res)=>{
			//console.log(res);
			if( res.data.msg === 'ok' ){
				var billboards = res.data.data.billboards;
				this.setState({
					bannerList : billboards
				});

				new window.Swiper('#mz_banner', {
					loop : true,
					pagination: {
				      	el: '#mz_pagination'
				    },
				    autoplay : true
				});

			}
		});
	}
}

export default Banner;