var gulp  = require("gulp");
var jsonlint = require("gulp-jsonlint");
var gutil = require('gulp-util');
var minify = require('gulp-jsonminify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var del = require('del');
 
var myCustomReporter = function (file) {
    gutil.log('File ' + file + ' is not valid JSON.');
};

gulp.task('validate', function () {
	return gulp.src("*.json")
	    .pipe(jsonlint())
	    .pipe(jsonlint.reporter(myCustomReporter));
});

gulp.task('minify', function() {
	return gulp.src('data.json')
		.pipe(minify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build'));
});

gulp.task('copy', function() {
	return gulp.src('data.json')
		.pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
    del(['dist'])
});

gulp.task('default', ['clean'], function() {
	gulp.start('minify', 'copy');
});