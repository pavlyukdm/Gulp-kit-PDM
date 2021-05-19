const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const jslibspath = require('../../app/js/libs')
const paths = require('../paths')

module.exports = gulp.task('js:main', function () {
	return gulp.src(paths.src.js)
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest(paths.build.jsMain))
})

module.exports = gulp.task('js:libs', function () {
	return gulp.src(jslibspath())
//If you need to move js libs without concatenation and minifying - comment next lines....
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('libs.js', {newLine: '\r\n'}))
		.pipe(sourcemaps.write('/'))
		.pipe(rename(function(path) {
			if (!path.extname.endsWith('.map')) {
					path.basename += '.min';
			}
	}))
// ...till here
		.pipe(gulp.dest(paths.build.jsVendor))
})