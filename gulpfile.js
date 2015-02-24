var gulp  = require("gulp");
var jsonlint = require("gulp-jsonlint");
var gutil = require('gulp-util');
 
var myCustomReporter = function (file) {
    gutil.log('File ' + file + ' is not valid JSON.');
};

gulp.task('validate', function () {
	return gulp.src("*.json")
	    .pipe(jsonlint())
	    .pipe(jsonlint.reporter(myCustomReporter));
});