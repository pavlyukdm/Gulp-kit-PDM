const gulp = require('gulp')
const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync').create()

gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	})
})

gulp.task('html', function () {
	return gulp.src('app/view/**/*.html')
		.pipe(gulp.dest('dist/'))
		.on('end', browserSync.reload);
})

gulp.task('js', function () {
	return gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js/'))
		.on('end', browserSync.reload);
})

gulp.task('styles', function () {
	return gulp.src('app/styles/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(gulp.dest('dist/css/'))
		.pipe(cleancss({
			level: {
				2: {
					all: true
				}
			}
		}))
		.pipe(sourcemaps.write())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
})

gulp.task("watch", function () {
	gulp.watch("app/view/**/*", gulp.series("html"))
	gulp.watch("app/styles/**/*", gulp.series("styles"))
	gulp.watch("app/js/**/*", gulp.series("js"))
})

gulp.task("default", gulp.series(
	gulp.parallel("html", "styles", "js"),
	gulp.parallel("watch", "serve")
))