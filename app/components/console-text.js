import React from 'react';

class ConsoleText extends React.Component{

	constructor(props) {
		super();
		this.state = { offset: 1 };		
	}

	render() {
		var offset 	= this.state.offset;
		var text 	= this.props.text.substring(0, offset);		

		if(this.props.text.length <= offset) {
			clearInterval(this.interval);
		} else {
			text += "▐";
		}

		return( 
			<div>{text}</div>
		);
	}

	update() {
		this.setState({offset: this.state.offset + 1});
	}
	
	componentWillMount() {
		this.setState({ text: this.props.text });
	}

	componentDidMount() {
		var time = Math.floor((Math.random() * 100) + 50);
		this.interval = setInterval(
			this.update.bind(this),
			time);
	}

}

ConsoleText.propTypes = {
	text: React.PropTypes.string.isRequired
}

export default ConsoleText