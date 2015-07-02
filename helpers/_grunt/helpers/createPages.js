"use strict";
var _ = require('lodash');
var path = require('path');
var grunt = require('grunt');


//Function for creating an array of files from each node in a JSON file
module.exports = {
	render: function createPages(datasrc, template) {
		var data = grunt.file.readJSON(datasrc);
		var pageArray = [];

		for (var i = 0; i < data.pages.length; i++) {
			pageArray.push({
				// the filename will determine how the page is named later
				filename: data.pages[i].filename,
				// the data for the current step from the json file
				data: data.pages[i],
				// add the template as the page content
				content: grunt.file.read(template)
			});
		}
		return _.flatten(pageArray);
	}
};