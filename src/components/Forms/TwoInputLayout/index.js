import React, { Component } from 'react';
import './index.css';

class TwoInputLayout extends Component{
	constructor(props){
		super(props);
		this.state = {
			form: this.props.form,
			optionOne: [],
			optionTwo: [],
			selectedOptionOne: '',
			selectedOptionTwo: '',
			valueOptionOne: 0,
			valueOptionTwo: 32
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});

		if (e.target.name === 'valueOptionOne') {
			this.setState({
				valueOptionTwo: this.convert(
					e.target.value,
					this.state.selectedOptionOne,
					this.state.selectedOptionTwo
				)
			});
		}

		if(e.target.name === 'valueOptionTwo'){
			this.setState({
				valueOptionOne: this.convert(
					e.target.value,
					this.state.selectedOptionTwo,
					this.state.selectedOptionOne
				)
			})
		}
	}

	handleSelectOneChange = (e) => {
		let value = e.target.value;
		if (this.state.selectedOptionTwo === value) {
			let selectedBefore = this.state.selectedOptionOne;
			this.setState({
				selectedOptionTwo: this.state.selectedOptionOne,
				selectedOptionOne: value
			});

			this.setState({
				valueOptionTwo: this.convert(
					this.state.valueOptionOne,
					value,
					selectedBefore
				)
			});
		}else{
			this.setState({
				selectedOptionOne: value
			});

			this.setState({
				valueOptionTwo: this.convert(
					this.state.valueOptionOne,
					value,
					this.state.selectedOptionTwo
				)
			});
		}
	}

	handleSelectTwoChange = (e) => {
		let value = e.target.value;
		if (this.state.selectedOptionOne === value) {
			let selectedBefore = this.state.selectedOptionTwo;
			this.setState({
				selectedOptionOne: this.state.selectedOptionTwo,
				selectedOptionTwo: value
			});

			this.setState({
				valueOptionTwo: this.convert(
					this.state.valueOptionOne,
					selectedBefore,
					value
				)
			});
		}else{
			this.setState({
				selectedOptionTwo: value
			})

			this.setState({
				valueOptionTwo: this.convert(
					this.state.valueOptionOne,
					this.state.selectedOptionOne,
					value
				)
			});
		}
	}

	initApp(){
		let options = [];
		let selectedOptionOne = '';
		let selectedOptionTwo = '';
		if (this.state.form === "temperature") {
			options = [
				{
					value: 'Celcius',
					name: 'Celcius'
				},
				{
					value: 'Fahrenheit',
					name: 'Fahrenheit'
				},
				{
					value: 'Kelvin',
					name: 'Kelvin'
				},
				{
					value: 'Reamur',
					name: 'Reamur'
				}
			];
			selectedOptionOne = 'Celcius';
			selectedOptionTwo = 'Fahrenheit';
		}

		this.setState({
			optionOne: options,
			optionTwo: options,
			selectedOptionOne,
			selectedOptionTwo
		});
	}

	componentDidMount(){
		this.initApp();
	}

	convert(fromValue, fromSelectedType, toSelectedType){
		let convertResult = 0;
		fromSelectedType = fromSelectedType.toString();
		toSelectedType = toSelectedType.toString();

		switch(toSelectedType.toLowerCase()){
			case 'celcius':
				if (fromSelectedType.toLowerCase() === 'reamur') {
					convertResult = 5 / 4 * fromValue;
				}

				if (fromSelectedType.toLowerCase() === 'fahrenheit') {
					convertResult = (fromValue - 32) * 5 / 9;
				}

				if (fromSelectedType.toLowerCase() === 'kelvin') {
					convertResult = fromValue - 273.15;
				}
			break;

			case 'reamur':
				if (fromSelectedType.toLowerCase() === 'celcius') {
					convertResult = 4 / 5 * fromValue;
				}

				if (fromSelectedType.toLowerCase() === 'fahrenheit') {
					convertResult = 4 / 9 * (fromValue - 32);
				}

				if (fromSelectedType.toLowerCase() === 'kelvin') {
					convertResult = 4 / 5 * (fromValue - 273.15);
				}
			break;

			case 'fahrenheit':
				if (fromSelectedType.toLowerCase() === 'celcius') {
					convertResult = 9 / 5 * fromValue + 32;
				}

				if (fromSelectedType.toLowerCase() === 'reamur') {
					convertResult = 9 / 4 * fromValue + 32;
				}

				if (fromSelectedType.toLowerCase() === 'kelvin') {
					convertResult = (fromValue - 273.15) * 9 / 5 + 32;
				}
			break;

			case 'kelvin':
				if (fromSelectedType.toLowerCase() === 'celcius') {
					convertResult = fromValue + 273.15;
				}

				if (fromSelectedType.toLowerCase() === 'reamur') {
					convertResult = 5 / 4 * fromValue + 273.15;
				}

				if (fromSelectedType.toLowerCase === 'fahrenheit') {
					convertResult = (fromValue - 32) * 5 / 9 + 273.15;
				}
			break;

			default:
				convertResult = 0;
		}

		return convertResult;
	}

	render(){

		return (
			<div className="main padded-more">
				<div className="form-input">
	    			<input id="value-option-one" 
	    				type="number" 
	    				className="input form-control" 
	    				name="valueOptionOne"
	    				onChange={this.handleInputChange}
	    				value={this.state.valueOptionOne}
	    			/>
	    			<select id="option-one" 
	    			className="form-control"
	    			name="selectedOptionOne"
	    			onChange={this.handleSelectOneChange} 
	    			value={this.state.selectedOptionOne}>
	    				{this.state.optionOne.map((option, index) => {
	    					return (
	    						<option value={option.name} key={index}>{option.value}</option> 
	    					);
	    				})}
	    			</select>
	        	</div>
	        	<span className="equals">=</span>
	        	<div className="form-input">
	        		<input id="value-option-two" 
	    				type="number" 
	    				className="input form-control"
	    				name="valueOptionTwo" 
	    				onChange={this.handleInputChange}
	    				value={this.state.valueOptionTwo}
	    			/>
	        		<select id="option-two" 
	        		className="form-control"
	        		name="selectedOptionTwo"
	        		onChange={this.handleSelectTwoChange}
	        		value={this.state.selectedOptionTwo}>
	    				{this.state.optionTwo.map((option, index) => {
	    					return (
	    						<option value={option.name} key={index}>{option.value}</option> 
	    					);
	    				})}
	    			</select>
	        	</div>
	      	</div>
		)
	}
}

export default TwoInputLayout;