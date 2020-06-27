import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component{
	render(){
		return (
			<div className="pane pane-sm sidebar">
	            <nav className="nav-group">
	              <h5 className="nav-group-title">Main Menu</h5>
	              <NavLink className="nav-group-item" activeClassName="active" to="/">
	                <span className="icon icon-home"></span>
	                Home
	              </NavLink>
	              <NavLink className="nav-group-item" activeClassName="active" to="/temperature-app">
	                <span className="icon icon-thermometer"></span>
	               	Convert
	              </NavLink>
	              <NavLink className="nav-group-item" to="/about">
	                <span class="icon icon-github"></span>
	                About
	              </NavLink>
	            </nav>
	        </div>
		)
	}
}

export default Sidebar;