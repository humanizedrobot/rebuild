import React from 'react';
import ReactDOM from 'react-dom';

class ConsoleInput extends React.Component{


	render() {
		var inputStyle = {
			borderWidth: 0,
			backgroundColor: 'black',
			color: 'rgb(177, 175 , 175)',
			marginTop: 5,
			fontWeigth: 'none',
			display: 'inline-block'
		};

		return (
			<div>
				<span> ~/> </span>
				<span>
					<input style={inputStyle} type='text' autofocus/>
				</span>
			</div>
		);
	}

}

export default ConsoleInput