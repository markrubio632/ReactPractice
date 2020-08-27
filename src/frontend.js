import React from 'react';
import ReactDOM from 'react-dom';

//used to be React.Component() -- but this prevented compilation
class Greeter extends React.Component {
	//A CONSTRUCTOR IS NEEDED FOR EACH CLASS-- WITH A SUPER INIT
	constructor(props) {
		super(props)
	}
	render() {
		return <p>please help, por favor ayudanme </p>;
	}
}

export default Greeter;