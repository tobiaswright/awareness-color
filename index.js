var fs = require('fs');
var lo = require('lodash')
var colors = require("./data.json");


var createMarkdown = function() {
	var fullList = "# Awareness color\n";

	fullList += "A list of awareness colors and their causes\n";
	colors = lo._.sortBy(colors.collection, 'colorname');

	colors.map(function(data){
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

createMarkdown();