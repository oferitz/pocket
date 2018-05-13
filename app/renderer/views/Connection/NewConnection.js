const { dialog } = require('electron').remote

import React, { PureComponent } from 'react'
import {connect} from '../../service/ipc'
import './NewConnection.less'
import FolderIcon from '../../static/svg/folder.svg'
import CloudIcon from '../../static/svg/cloud.svg'
import SearchIcon from '../../static/svg/search.svg'

class NewConnection extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			local: ''
		}
	}
	onBrowse = () => {
		dialog.showOpenDialog({ properties: ['openDirectory'] }, async filePaths => {
			if (filePaths && filePaths.length) {
				const res = await connect(filePaths[0])
				console.log(res)
			}
		})
	}
	onOpen = () => {}
	onLocalChange = event => {
		this.setState({ local: event.target.value })
	}
	render() {
		return (
			<div className="Pocket_NewConnection">
				<div className="Pocket_NewConnection-row Pocket_localConnection">
					<div className="top">
						<img className="icon" src={FolderIcon} width={32} />
						<h2 className="title">Local Connection</h2>
					</div>
					<div className="bottom">
						<input
							type="text"
							placeholder="path/to/local/db"
							value={this.state.local}
							onChange={this.onLocalChange}
						/>
						<span className="browse" onClick={this.onBrowse}>
							<img src={SearchIcon} width={16} />
						</span>
						<button onClick={this.onOpen}>Open</button>
					</div>
				</div>
				<div className="Pocket_NewConnection-row Pocket_remoteConnection">
					<div className="top">
						<img className="icon" src={CloudIcon} width={32} />
						<h2 className="title">Remote Connection</h2>
					</div>
					<div className="bottom">
						<input type="text" placeholder="https://localhost:5984" />
						<button onClick={() => {}}>Connect</button>
					</div>
				</div>
			</div>
		)
	}
}
NewConnection.propTypes = {}

export default NewConnection
