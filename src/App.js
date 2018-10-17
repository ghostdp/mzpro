import React, { Component , Fragment } from 'react';
import './App.css';
import {
	BrowserRouter as Router, 
  	Route, 
  	Switch,
  	Redirect 
} from 'react-router-dom';

import Home from './components/home/home.js';
import Film from './components/film/film.js';
import Detail from './components/detail/detail.js';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';

class App extends Component {
  render() {
    return (
      <Router>	
	      <Fragment>
	          <Header />
	          <Nav />
	          {/*<Home />*/}
	          {/*<Film />*/}
	          {/*<Detail />*/}
	          <Switch>
		          <Route path="/home" component={ Home } />
		          <Route path="/film" component={ Film } />
		          <Route path="/detail/:mid" component={ Detail } />
		          <Redirect from="/*" to="/home" />
	          </Switch>
	      </Fragment>
      </Router>
    );
  }
}

export default App;
