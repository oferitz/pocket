const { spawn } = require('child_process')

console.log('Starting Main Process...')
spawn('npm', ['run', 'start-dev'], {
	shell: true,
	env: process.env,
	stdio: 'inherit'
})
	.on('close', code => process.exit(code))
	.on('error', spawnError => console.error(spawnError))
