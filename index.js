var fs = require('fs');
var lo = require('lodash')
var colors = require("./data.json");

var fullList = "# Awareness color\n";
fullList += "A list of awareness colors and their causes\n";
fullList += "-----\n"

colors = lo._.sortBy(colors.collection, 'colorname');

colors.map(function(data){
	var colorlist;
	
	colorlist = "###"+data.colorname+"\n";

	data.causes.map( function( causes ) {
		var cause
		cause = lo._.sortBy(causes, 'cause');
		colorlist += "* "+cause+"\n";
	});

	fullList += colorlist+"\n";

});

fs.writeFileSync("README.md", fullList);