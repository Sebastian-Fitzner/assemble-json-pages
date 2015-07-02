/**
 * Configuration file
 */
var config = module.exports;

config.options = {
	config: {
		// in this directory you can find your grunt config tasks
		src: "helpers/_grunt/*.js"
	},
	paths: {
		// tasks folder with gulp tasks
		// helpers folder with tasks
		helpers: 'helpers',
		// resources folder with working files
		src: 'resources',
		// panel path used in custom hbs helper
		panels: 'resources/templating/partials',
		// dev/working folder
		dev: '_output'
	},

	// define your ports for livereload
	ports: {
		app: 3000,
		test: 3001,
		livereload: 35731
	}
};
