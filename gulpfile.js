const gulp = require('gulp')


const html = require('./gulp/tasks/html')
const js = require('./gulp/tasks/js')
const styles = require('./gulp/tasks/styles')
const serve = require('./gulp/tasks/serve')
const fonts = require('./gulp/tasks/fonts')
//const watch = require('./gulp/tasks/watch')

gulp.task("default", gulp.series(
	gulp.parallel("html", "styles", "js", "fonts"),
	gulp.parallel("serve")
))