const gulp = require('gulp')
const fileinclude = require('gulp-file-include');
const paths = require('../paths');

module.exports = 	gulp.task('html', function () {
	return gulp.src(paths.src.html)
	.pipe(fileinclude())
	.pipe(gulp.dest(paths.build.html));
	// return 	gulp.src('app/[^_]*.html')
	// .pipe(fileinclude({
	// 	prefix: '@@',
	// 	basepath: '@file'
	// }))
	// 	.pipe(gulp.dest('dist/'))
})