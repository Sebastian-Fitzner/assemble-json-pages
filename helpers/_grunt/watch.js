module.exports = {
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files: [
			'<%= paths.dev %>/{,*/}*.html',
			'<%= paths.dev %>/css/{,*/}*.css',
			'<%= paths.dev %>/js/{,*/}*.js',
			'<%= paths.dev %>/img/**/*.{jpg,png}'
		]
	},
	js: {
		files: '<%= paths.src %>/js/**/*.js',
		tasks: 'sync:js'
	},
	ajax: {
		files: '<%= paths.src %>/ajax/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
			],
		tasks: 'sync:assets'
	},
	scss: {
		files: '<%= paths.src %>/scss/**/*',
		tasks: 'sass:dev',
	    options: {
			spawn: false
		}
	},
	universal: {
		files: '<%= paths.src %>/scss/universal.scss',
		tasks: 'sass:universal'
	},
	templating: {
		files: ['<%= paths.src %>/{templating/data,templating/layouts,templating/partials}/**/{,*/}*.{md,hbs,json}'],
	    tasks: ['load-pages', 'assemble'],
	    options: {
			spawn: false
		}
	},
	pages: {
		files: ['<%= paths.src %>/templating/pages/**/{,*/}*.hbs'],
		tasks: ['load-pages', 'assemble:pages'],
		options: {
			spawn: false
		}
	}
};