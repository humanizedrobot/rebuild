import React from 'react';
import ConsoleText from './app/components/console-text'
import ConsoleInput from './app/components/console-input'

class App extends React.Component {
	render(){
		return (
			<div>
				<ConsoleText text="THIS IS WHAT YOU WANT, ISN'T?" />
				<ConsoleInput />
			</div>
		);
	}

	onTextComplete(){

	}

	initFocus(){
		
	}

}

export default App