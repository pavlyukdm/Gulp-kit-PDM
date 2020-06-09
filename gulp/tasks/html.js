const gulp = require('gulp')

module.exports = 	gulp.task('html', function () {
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist/'))
})