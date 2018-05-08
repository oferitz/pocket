import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../static/svg/pocket.svg'
import Add from '../../static/svg/plus.svg'
import './home.less'

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
				<Link to="/newConnection">
					<img src={Add} width={32} />
				</Link>
			</div>
		</div>
	)
}

export default Home
