/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
	title: string,
	valid: boolean
}

function App(props: Props) {
	return <h>hi mom</h>
}

ReactDOM.render(
	<App title="cool" valid={true}/>,
	document.getElementById('root')
);

