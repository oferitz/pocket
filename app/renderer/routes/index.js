import React from 'react'
import ErrorBoundary from 'react-error-boundary'
import Error from '../components/error'
import { Switch, Route } from 'react-router'
import Home from '../views/home'

export default () => (
	<ErrorBoundary FallbackComponent={Error}>
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</ErrorBoundary>
)

