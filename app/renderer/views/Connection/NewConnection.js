import React, { PureComponent } from 'react'
import './NewConnection.less'
import FolderImg from '../../static/svg/folder-2.svg'
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
					<img src={FolderImg} width={32} />
					<h2>Local Connection</h2>
					<input type="text" placeholder="path/to/local/db" />
					<button onClick={()=> {}}>Open</button>
				</div>
				<div className="Pocket_NewConnection-row Pocket_remoteConnection">
					<img src={CloudImg} width={32} />
					<h2>Remote Connection</h2>
					<input type="text" placeholder="https://localhost:5984" />
					<button onClick={()=> {}}>Connect</button>
					The

				</div>
			</div>
		)
	}
}
NewConnection.propTypes = {}

export default NewConnection
