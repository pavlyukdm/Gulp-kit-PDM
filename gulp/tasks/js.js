const gulp = require('gulp')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')

module.exports = gulp.task('js:main', function () {
	return gulp.src('app/js/main.js')
		.pipe(gulp.dest('dist/js/'))
})

module.exports = gulp.task('js:libs', function () {
	return gulp.src([
			'./app/js/vendor/jquery.min.js',
			'./app/js/vendor/swiper.min.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('libs.js', {newLine: '\r\n'}))
		.pipe(sourcemaps.write('/'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/js/'))
})