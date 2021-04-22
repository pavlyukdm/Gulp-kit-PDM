const gulp = require('gulp')
const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const paths = require('../paths')

module.exports = 	gulp.task('styles:main', function () {
	return gulp.src(paths.src.cssMain)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(groupCssMediaQueries())
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.build.css))
		.pipe(cleancss({
			level: {
				2: {
					all: true,
					removeUnusedAtRules: false
				}
			}
		}))
		.pipe(sourcemaps.write('/'))
		.pipe(rename(function(path) {
			if (!path.extname.endsWith('.map')) {
					path.basename += '.min';
			}
	}))
		.pipe(gulp.dest(paths.build.css))
})

module.exports = 	gulp.task('styles:libs', function () {
	return gulp.src(paths.src.cssLibs)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleancss({
			level: {
				2: {
					all: true,
					removeUnusedAtRules: false,
				}
			}
		}))
		.pipe(sourcemaps.write('/'))
		.pipe(rename(function(path) {
			if (!path.extname.endsWith('.map')) {
					path.basename += '.min';
			}
	}))
		.pipe(gulp.dest(paths.build.css))
})