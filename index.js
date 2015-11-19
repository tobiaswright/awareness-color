var fs = require('fs');
var lo = require('lodash');
var minify = require("node-json-minify");
var colors = require("./data.json");


var createMarkdown = function() {
	var fullList = "# Awareness color\n";

	fullList += "A list of awareness colors and their causes\n";
	colorsl = lo._.sortBy(colors.collection, 'colorname');

	colorsl.map(function(data){
		var colorlist;
		var cause = [];
		
		colorlist = "###"+data.colorname+"\n";

		data.causes.map( function( causes ) {
			cause.push(causes.cause);

		});

		cause = lo._.sortBy(cause);

		cause.map( function( cause ) {
			colorlist += "* "+cause+"\n";
		});

		fullList += colorlist+"\n";

	});

	console.log("Creating Markdown...")

	fs.writeFileSync("README.md", fullList);

}

var minifyFile = function() {

	var m = minify(JSON.stringify(colors));

	m = JSON.parse(m)

	fs.writeFileSync("build/build.min.json", m);
	console.log("Creating Minified json...");

}

createMarkdown();
minifyFile();