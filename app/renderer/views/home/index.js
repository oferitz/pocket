import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../static/pocket.svg'
function Home(props) {
	return (
		<div className="Pocket_home">
			<div className="Pocket_home__banner">
				<img className="Pocket_home__banner__logo" src={Logo} width={80} />
				<h1 className="Pocket_home__banner__title">Pocket</h1>
			</div>
			<div className="Pocket_home__empty__message">
				<h2>No database connections added.</h2>
				<p>Click the "+" to add a PouchDB connection.</p>
			</div>
		</div>
	)
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home
