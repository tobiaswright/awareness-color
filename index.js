var fs = require('fs');
var colors = require("./data.json");

var fullList = "# Awareness color\n";
fullList += "A list of awareness colors and their causes\n";
fullList += "-----\n"

colors = colors.collection;

colors.map(function(data){
	var colorlist;
	
	colorlist = "###"+data.colorname+"\n";

	data.causes.map( function( cause ) {
		colorlist += "* "+cause.cause+"\n";
	});

	fullList += colorlist+"\n";

});

fs.writeFileSync("README.md", fullList);