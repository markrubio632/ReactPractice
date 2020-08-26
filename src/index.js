import React from 'react';
import ReactDOM from 'react-dom';

//WHEN A <DIV> TAG FROM INDEX.HTML IS CALLED, ONLY ONE ELEMENT CAN EXIST

/* ReactDOM.render(<p>Hello world!!!</p>, document.getElementById('root'));

ReactDOM.render(<p>Hello there, my "hello" is located in index.html</p>,
	document.getElementById('hello')); */

const myHead = (
	<h1 align="center">Welcome to DollarsBank Banking!</h1>
);

const logger = (
	<button name="logger" href="/login">Login</button>
);
const reggie = (
	<button name="reggie" href="/register">Register</button>
);

class Greeter extends React.Component() {
	render() {
		return <h1>please help</h1>;
	}
}

ReactDOM.render(myHead, document.getElementById('root'));
//ReactDOM.render(logger, document.getElementById("buttons"));
ReactDOM.render(<Greeter />, document.getElementById("header"));

	//trying to call a class from index.html but i get a --
	//'HelloThere' is not defined  react/jsx-no-undef -- error
//ReactDOM.render(<HelloThere />, document.getElementById('myDiv'));

//export default Greeter;

