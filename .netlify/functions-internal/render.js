const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","logo150.png","manifest. webmanifest","smui.css","wheel-sound.mp3","service-worker.js"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".mp3":"audio/mpeg"},
	_: {
		entry: {"file":"start-13a5bfb9.js","js":["start-13a5bfb9.js","chunks/index-724dd5c0.js","chunks/index-ffa98847.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
