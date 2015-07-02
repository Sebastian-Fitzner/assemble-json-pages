var grunt = require('grunt');
var createPages = require('./helpers/createPages');

module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: '<%= paths.src %>/templating/data/**/*.json',
		helpers: '<%= paths.src %>/templating/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templating/layouts/',
		layout: 'lyt-default.hbs',
		partials: [
			'<%= paths.src %>/templating/partials/**/*.hbs'
		],
		collections: [
			'sitemap'
		]
	},
	pages: {
		options: {
			pages: createPages.createPage('resources/templating/data/pages.json', 'resources/templating/pages/index.hbs')
		},
		files: [
			{dest: '<%= paths.dev %>/', src: '!*'} //We need to trick assemble here using !* as the src
		]
	}
};