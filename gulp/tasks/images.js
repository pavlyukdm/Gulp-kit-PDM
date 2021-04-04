const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')
const cache = require('gulp-cache')

module.exports = gulp.task('imagemin', function () {
	return gulp.src('./app/img/**/*.{gif,svg,png,jpg,jpeg}')
		.pipe( cache(
			imagemin([
				imagemin.gifsicle({
					interlaced: true
				}),
				imagemin.mozjpeg({
					quality: 85,
					progressive: true
				}),
				imageminPngquant({
					speed: 5,
					quality: [0.7,0.85]
				}),
				imagemin.svgo({
					plugins: [{
							removeViewBox: true
						},
						{
							cleanupIDs: false
						}
					]
				}),
			])
			)
		)
		.pipe(gulp.dest('dist/img'))
})