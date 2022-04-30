const { init } = require('../handler.js');

exports.handler = init({
	appDir: '_app',
	assets: new Set([
		'favicon.png',
		'logo150.png',
		'manifest. webmanifest',
		'smui.css',
		'service-worker.js'
	]),
	mimeTypes: { '.png': 'image/png', '.css': 'text/css' },
	_: {
		entry: {
			file: 'start-ae3891e3.js',
			js: ['start-ae3891e3.js', 'chunks/index-1eafe1b1.js', 'chunks/index-66fdcb8c.js'],
			css: []
		},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [],
		matchers: async () => {
			return {};
		}
	}
});
