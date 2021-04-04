const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const paths = require('../paths')

module.exports =  gulp.task("watch", function () {
 	gulp.watch(paths.watch.html, gulp.series("html")).on('change', browserSync.reload);
 	gulp.watch(paths.watch.css, gulp.series("styles")).on('end', browserSync.reload);
 	gulp.watch(paths.watch.js, gulp.series("js")).on('change', browserSync.reload);
 	gulp.watch(paths.watch.images, gulp.series("imagemin")).on('change', browserSync.reload);
 	gulp.watch(paths.watch.fonts, gulp.series("fonts")).on('change', browserSync.reload);
 })