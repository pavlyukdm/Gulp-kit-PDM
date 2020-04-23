const gulp = require('gulp')

require('./gulp/tasks/html')
require('./gulp/tasks/js')
require('./gulp/tasks/styles')
require('./gulp/tasks/serve')
require('./gulp/tasks/fonts')
require('./gulp/tasks/watch')

gulp.task("default", gulp.series(
	gulp.parallel("html", "styles:main", "styles:libs", "js:main", "js:libs", "fonts"),
	gulp.parallel("serve")
))