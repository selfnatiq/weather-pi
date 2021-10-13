const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		runtimeCaching,
		importScripts: ['/service-worker.js'],
		// disable: process.env.NODE_ENV === 'development',
	},

	reactStrictMode: true,
})
