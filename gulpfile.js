const gulp = require('gulp')

require('./gulp/tasks/html')
require('./gulp/tasks/styles')
require('./gulp/tasks/js')
require('./gulp/tasks/images')
require('./gulp/tasks/fonts')
require('./gulp/tasks/serve')
require('./gulp/tasks/clean')
require('./gulp/tasks/watch')


gulp.task("default", gulp.series(
	"clean",
	gulp.parallel("imagemin", "styles:main", "styles:libs", "js", "html", "fonts"),
	gulp.parallel("serve")
))