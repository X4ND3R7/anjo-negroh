var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


//task Sass
gulp.task('sass', function(){
	return gulp.src('sass/**/*.sass')
	.pipe(sass({outputStyle: 'compressed'})
		.on('error', sass.logError))
	.pipe(gulp.dest('css'));
});

//task Watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});

//task default Gulp
gulp.task('default', ['sass', 'watch']);
