import { createStore , combineReducers } from 'redux';

function navShowReducer(state = false , action){
	if( action.type === 'CHANGE_NAVSHOW' ){
		return action.payload;
	}
	else{
		return state;
	}
}
function movieTitleReducer(state = '卖座电影' , action){
	if( action.type === 'CHANGE_MOVIETITLE' ){
		return action.payload;
	}
	else{
		return state;
	}
}


var reducers = combineReducers({
	navShow : navShowReducer,
	movieTitle : movieTitleReducer
});

var store = createStore(reducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;
