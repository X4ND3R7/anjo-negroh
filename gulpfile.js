//'use strict'
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');


//task Sass
gulp.task('sass', function(){
	return sass('sass/*.sass').pipe(gulp.dest('css'))
});

//task Watch
gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['sass']);
});

//task default Gulp
gulp.task('default', ['sass', 'watch']);
