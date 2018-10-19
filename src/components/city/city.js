import React , { Component } from 'react';
import './city.css';
import axios from 'axios';
import { setScroll } from '../../base.js';

class City extends Component {
	constructor(){
		super();
		this.state = {
			cityList : []
		};
	}
	render(){
		return (
			<div id="city">
				<h2>按字母排序</h2>
				<ul className="cityIndex">
					{
						this.state.cityList.map((item,index)=>{
							return <li key={index} onTouchStart={ ()=>{ this.handleToIndex(index) } }>{ item.index }</li>;
						})
					}
				</ul>
				<ul ref="cityList" className="cityList">
					{
						this.state.cityList.map((item,index)=>{
							return (
								<li className="cityListItem" key={index}>
									<h2>{item.index}</h2>
									<ul>
										{
											item.list.map((cityItem,index)=>{
												return <li key={index}>{cityItem}</li>;
											})
										}
									</ul>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
	componentDidMount(){
		axios.get('/v4/api/city').then((res)=>{
			if( res.data.msg === 'ok' ){
				var cities = res.data.data.cities;
				this.setState({
					cityList : this.formatCities(cities)
				});
			}
		});
	}
	formatCities(cities){

		var result = [];

		/*result : 
			[ 
				{ index : 'A' , list : ['安顺' , '鞍山' ] } ,
				{ index : 'B' , list : ['北京' , '北海' ] }
			]*/

		for(var i=0;i<cities.length;i++){
			var firstLetter = cities[i].pinyin.charAt(0);
			if( toCom(firstLetter) ){   //第一次出现对应的字母，创建JSON对象
				result.push( { index : firstLetter , list : [ cities[i].name ] } );
			}
			else{   //字母已经出现过了，更新list数组
				for(var j=0;j<result.length;j++){
					if( result[j].index === firstLetter ){
						result[j].list.push( cities[i].name );
					}
				}
			}
		}

		function toCom(firstLetter){
			for(var i=0;i<result.length;i++){
				if( result[i].index === firstLetter ){
					return false;
				}
			}
			return true;
		}	

		result.sort(function(n1,n2){
			if( n1.index > n2.index ){
				return 1;
			}
			else{
				return -1;
			}
		});

		//console.log(result);

		return result;

	}
	handleToIndex(index){
		//console.log(index);
		var cityListItem = this.refs.cityList.getElementsByClassName('cityListItem');

		setScroll(cityListItem[index].offsetTop - 50);

	}	
}
export default City;