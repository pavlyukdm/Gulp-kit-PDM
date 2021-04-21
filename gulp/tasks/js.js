const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const jslibspath = require('../../app/js/libs')
const paths = require('../paths')

module.exports = gulp.task('js:main', function () {
	return gulp.src(paths.src.js)
		.pipe(gulp.dest(paths.build.js))
})

module.exports = gulp.task('js:libs', function () {
	return gulp.src(jslibspath())
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('libs.js', {newLine: '\r\n'}))
		.pipe(sourcemaps.write('/'))
		.pipe(rename(function(path) {
			if (!path.extname.endsWith('.map')) {
					path.basename += '.min';
			}
	}))
		.pipe(gulp.dest(paths.build.js))
})