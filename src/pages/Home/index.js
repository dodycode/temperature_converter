import React, { Component } from 'react';
import './index.css';

class Home extends Component{
	render(){
		return (
			<div className="padded-more container">
				<img src="logo192.png" />
	        	<h1>Temperature Converter</h1>
	        	<p>Temperature Converter desktop app build with Electron and React!</p>
	      	</div>
		)
	}
}

export default Home;