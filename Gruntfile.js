/*
 * Generated on 2015-07-02
 * generator-prototype v1.0.0
 * http://prototype-generator.com/
 *
 * Copyright (c) 2015 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 *
 */

var config = require('./helpers/config');
var createPages = require('./helpers/_grunt/helpers/createPages');

module.exports = function (grunt) {

	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, {});
	// measures the time each task takes
	require('time-grunt')(grunt);

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, config.options);



	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */

	// SASS Task
	grunt.registerTask('watchCSS', [
		'sassGlobber:dev', // Sass Globbing with Grunt (see: http://www.prototype-generator.com/getting-started/features.html)
		'sass:dev'
	]);


	// Build HTML Task
	grunt.registerTask('build-html', [
		'assemble'
	]);

	// HTML Hint Task (Check your HTML)
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	// JS Hint Task (Check you JS)
	grunt.registerTask('check-js', [
		'jshint'
	]);
	// Beautifier Task (Beautify your JS files)
	grunt.registerTask('beauty-files', [
		'jsbeautifier'
	]);

	/*
	 *	ADVANCED TASKS	
	 */
	grunt.registerTask('server', [
		'assemble',
		'concurrent:syncing',
		'watchCSS',
		// 'connect:livereload',
		'browserSync',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dev',
		'jsbeautifier',
		'concurrent:syncing',
		'watchCSS',
		'sass:universal',
		'cssmin',
		'assemble',
		'concurrent:build'
	]);

	grunt.registerTask('default', [
		'server'
	]);

	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);

	grunt.registerTask('load-pages', 'Load pages for assemble', function () {
		var options = this.options();
		var pages = createPages.render(options.datasrc, options.template);
		grunt.config.set('assemble.details.options.pages', pages);
	});
};