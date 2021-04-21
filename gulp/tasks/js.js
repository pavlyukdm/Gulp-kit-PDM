const gulp = require('gulp')
const paths = require('../paths')

module.exports = gulp.task('js', function () {
	return gulp.src(paths.src.js)
		.pipe(gulp.dest(paths.build.js))
})