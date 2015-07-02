var createPages = require('./helpers/createPages');

module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: '<%= paths.src %>/templating/data/**/*.json',
		helpers: '<%= paths.src %>/templating/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templating/layouts/',
		layout: false,
		partials: [
			'<%= paths.src %>/templating/partials/**/*.hbs',
			'<%= paths.src %>/templating/layouts/**/*.hbs',
			'!<%= paths.src %>/templating/layouts/lyt-details.hbs'
		],
		collections: [
			'sitemap'
		]
	},
	details: {
		options: {
			pages: createPages.render('resources/templating/data/pages.json', 'resources/templating/layouts/lyt-details.hbs')
		},
		files: [
			{dest: '<%= paths.dev %>/', src: '!*'} //We need to trick assemble here using !* as the src
		]
	}
};