import React, { Component } from 'react'
import { Router } from 'react-router'
import Routes from './routes'
import createBrowserHistory from 'history/createBrowserHistory'
const browserHistory = createBrowserHistory()

import './style/app.less'

class App extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {}

	render() {
		return (
			<Router history={browserHistory}>
				<Routes />
			</Router>
		)
	}
}

export default App
