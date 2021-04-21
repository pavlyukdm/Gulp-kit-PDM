const gulp = require('gulp')
const fileinclude = require('gulp-file-include');
const paths = require('../paths');
const useref = require('gulp-useref')
const uglify = require('gulp-uglify')
const gulpif = require('gulp-if')
const lazypipe = require('lazypipe')
const sourcemaps = require('gulp-sourcemaps')

module.exports = 	gulp.task('html', function () {
	return gulp.src(paths.src.html)
	.pipe(fileinclude())
	.pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
	.pipe(gulpif('*.js', uglify()))
	.pipe(sourcemaps.write('/'))
	.pipe(gulp.dest(paths.build.html));
})