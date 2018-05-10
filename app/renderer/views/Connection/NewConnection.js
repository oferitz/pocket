import React, { PureComponent } from 'react'
import './NewConnection.less'
import FolderImg from '../../static/svg/folder.svg'
import CloudImg from '../../static/svg/cloud.svg'

class NewConnection extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="Pocket_NewConnection">
				<div className="Pocket_NewConnection-row Pocket_localConnection">
					<div className="top">
						<img className="icon" src={FolderImg} width={32} />
						<h2 className="title">Local Connection</h2>
					</div>
					<div className="bottom">
						<input type="text" placeholder="path/to/local/db" />
						<button onClick={() => {}}>Open</button>
					</div>
				</div>
				<div className="Pocket_NewConnection-row Pocket_remoteConnection">
					<div className="top">
						<img className="icon" src={CloudImg} width={32} />
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
