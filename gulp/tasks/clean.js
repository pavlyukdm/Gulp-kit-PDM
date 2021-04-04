const gulp = require('gulp')
const del = require('del')
const paths = require('../paths')

module.exports = gulp.task('clean', function() {
			return del([paths.clean]);
	});