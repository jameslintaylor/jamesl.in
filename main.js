/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
	return (
		<div>
			<img src="static/mewtwo.png" />
			<h2>jlt</h2>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

function test() {
	let anInt: number = 2;
	let aString: string = "abcdef";
	let x: boolean = anInt + aString;
}
