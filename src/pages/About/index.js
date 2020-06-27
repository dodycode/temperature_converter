import React, { Component } from 'react';
import './index.css';

class About extends Component{
	render(){
		return (
			<div className="padded-more container">
				<img src="dodycode.jpeg" class="img-circle" />
	        	<p>Made with love by Dodycode</p>
	        	<p>You can find my other open source projects at <b>github.com/dodycode</b> </p>
	      	</div>
		)
	}
}

export default About;