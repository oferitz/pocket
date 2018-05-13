const PouchDB = require('pouchdb')

const ipc = require('electron-better-ipc')

ipc.answerRenderer('connect', async path => {
	let pdb = new PouchDB(path)
	const all = await pdb.allDocs({ include_docs: true})
	return all
})
