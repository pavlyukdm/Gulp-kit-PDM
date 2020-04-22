const gulp = require('gulp')

module.exports = 	gulp.task('js', function () {
	return gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js/'))
})